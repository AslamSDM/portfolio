import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  readTime: string;
  draft?: boolean;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split("T")[0],
        summary: data.summary || "",
        content,
        readTime: data.readTime || estimateReadTime(content),
        draft: data.draft || false,
      };
    });

  return allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostHtml(post: BlogPost): Promise<BlogPost & { html: string }> {
  const processed = await remark().use(gfm).use(html, { sanitize: false }).process(post.content);
  const htmlContent = processed.toString();

  return {
    ...post,
    html: htmlContent,
  };
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

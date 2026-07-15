import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostHtml, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Mohammed Aslam S",
    };
  }

  return {
    title: `${post.title} | Mohammed Aslam S`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://aslam.sh/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Mohammed Aslam S"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postWithHtml = await getPostHtml(post);

  return (
    <main className="min-h-screen bg-background">
      <article className="notion-page fade-in">
        <Link href="/blog" className="notion-link text-sm">
          ← Back to blog
        </Link>

        <header className="mt-6">
          <h1 className="text-[30px] leading-[1.2] font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mt-2 text-sm text-text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <hr className="notion-divider" />

        <div
          className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-a:decoration-text-muted prose-a:underline-offset-2 prose-code:text-foreground prose-pre:bg-hover prose-pre:border prose-pre:border-border prose-pre:rounded-md prose-blockquote:border-l-border prose-blockquote:text-text-muted"
          dangerouslySetInnerHTML={{ __html: postWithHtml.html }}
        />
      </article>
    </main>
  );
}

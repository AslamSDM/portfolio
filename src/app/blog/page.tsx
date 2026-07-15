import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mohammed Aslam S",
  description: "Articles on engineering, building products, and lessons learned.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Mohammed Aslam S",
    description: "Articles on engineering, building products, and lessons learned.",
    url: "https://aslam.sh/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      <article className="notion-page fade-in">
        <h1 className="text-[34px] leading-[1.15] font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <p className="text-base text-text-muted mt-2">
          Articles on engineering, building products, and lessons learned.
        </p>

        <hr className="notion-divider" />

        {posts.length === 0 ? (
          <p className="text-text-muted text-sm">No posts yet. Add Markdown files to{" "}
            <code className="text-xs bg-hover px-1.5 py-0.5 rounded">src/content/blog</code>
            .
          </p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block notion-card group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-text-muted transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs text-text-muted shrink-0">{formatDate(post.date)}</span>
                </div>
                <p className="text-sm text-text-muted mt-1.5 leading-relaxed">{post.summary}</p>
                <span className="inline-block text-xs text-text-muted mt-2">{post.readTime}</span>
              </Link>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}

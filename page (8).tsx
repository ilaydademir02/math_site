import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <PageHeader
        eyebrow="Occasional writing"
        title="Blog"
        description="Add a new post by creating an .mdx file in content/blog/."
      />
      <ul className="mt-10 divide-y divide-line dark:divide-night-line">
        {posts.map((post) => (
          <li key={post.slug} className="py-6">
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-night-soft">
                {post.date} · {post.readingTime}
              </p>
              <h2 className="mt-1 font-serif text-xl text-ink group-hover:text-accent dark:text-night-text dark:group-hover:text-accent-soft">
                {post.title}
              </h2>
              {post.summary && (
                <p className="mt-2 max-w-prose text-sm text-ink-soft dark:text-night-soft">{post.summary}</p>
              )}
            </Link>
          </li>
        ))}
        {posts.length === 0 && (
          <p className="py-10 text-sm text-ink-faint dark:text-night-soft">
            No posts yet — add an .mdx file to content/blog/ to get started.
          </p>
        )}
      </ul>
    </div>
  );
}

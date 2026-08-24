import { getAllSlugs, getSource } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";
import Link from "next/link";
import readingTime from "reading-time";

export function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data } = getSource("blog", params.slug);
  return { title: data.title };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data, content } = getSource("blog", params.slug);
  const source = await renderMdx(content);
  const rt = readingTime(content).text;

  return (
    <article className="mx-auto max-w-content px-6 py-16">
      <Link href="/blog" className="font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-soft">
        ← All posts
      </Link>
      <header className="mt-6 border-b border-line pb-6 dark:border-night-line">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-night-soft">
          {data.date} · {rt}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium text-ink sm:text-4xl dark:text-night-text">
          {data.title}
        </h1>
      </header>
      <div className="mt-10 max-w-prose">
        <MDXContent source={source} />
      </div>
    </article>
  );
}

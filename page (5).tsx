import { getAllPublications } from "@/lib/content";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  const publications = getAllPublications();
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <PageHeader
        eyebrow="Papers & preprints"
        title="Publications"
        description="To add a publication, drop a new .json file into content/publications/ — see the README for the field format."
      />

      <ol className="mt-10 space-y-10">
        {publications.map((p) => (
          <li key={p.slug} className="border-t border-line pt-6 dark:border-night-line">
            <h2 className="font-serif text-xl text-ink dark:text-night-text">{p.title}</h2>
            <p className="mt-1 text-sm text-ink-soft dark:text-night-soft">{p.authors}</p>
            <p className="text-sm italic text-ink-faint dark:text-night-soft">
              {p.venue}, {p.year}
            </p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft dark:text-night-soft">
              {p.abstract}
            </p>
            <div className="mt-3 flex gap-4 font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-soft">
              {p.arxiv && <a href={p.arxiv}>arXiv</a>}
              {p.pdf && <a href={p.pdf}>PDF</a>}
              {p.doi && <a href={`https://doi.org/${p.doi}`}>DOI</a>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

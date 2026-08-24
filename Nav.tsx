import Link from "next/link";
import { getAllNotes } from "@/lib/content";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Notes" };

export default function NotesPage() {
  const notes = getAllNotes();
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <PageHeader
        eyebrow="Definitions, theorems, proofs"
        title="Notes"
        description="Expository mathematical notes. Add a new one by creating an .mdx file in content/notes/ — see the README."
      />

      <ul className="mt-10 divide-y divide-line dark:divide-night-line">
        {notes.map((note) => (
          <li key={note.slug} className="py-6">
            <Link href={`/notes/${note.slug}`} className="group block">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-night-soft">
                {note.date}
              </p>
              <h2 className="mt-1 font-serif text-xl text-ink group-hover:text-accent dark:text-night-text dark:group-hover:text-accent-soft">
                {note.title}
              </h2>
              {note.summary && (
                <p className="mt-2 max-w-prose text-sm text-ink-soft dark:text-night-soft">{note.summary}</p>
              )}
              {note.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint dark:border-night-line dark:text-night-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
        {notes.length === 0 && (
          <p className="py-10 text-sm text-ink-faint dark:text-night-soft">
            No notes yet — add an .mdx file to content/notes/ to get started.
          </p>
        )}
      </ul>
    </div>
  );
}

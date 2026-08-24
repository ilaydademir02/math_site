import PageHeader from "@/components/PageHeader";
import { teachingInterests, courses, officeHours, teachingResources } from "@/config/teaching";

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <PageHeader eyebrow="In the classroom" title="Teaching" />

      <section className="mt-10">
        <h2 className="font-serif text-xl text-ink dark:text-night-text">Teaching Interests</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {teachingInterests.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 text-sm text-ink-soft dark:border-night-line dark:text-night-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink dark:text-night-text">Courses</h2>
        <div className="mt-4 divide-y divide-line dark:divide-night-line">
          {courses.map((c) => (
            <div key={c.code + c.term} className="grid gap-2 py-6 sm:grid-cols-[1fr,auto]">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-soft">
                  {c.code} · {c.term}
                </p>
                <h3 className="mt-1 font-serif text-lg text-ink dark:text-night-text">{c.title}</h3>
                <p className="text-sm text-ink-faint dark:text-night-soft">{c.role}</p>
                <p className="mt-2 text-sm text-ink-soft dark:text-night-soft">{c.description}</p>
              </div>
              <div className="flex gap-4 self-start font-mono text-xs uppercase tracking-widest text-accent sm:justify-end dark:text-accent-soft">
                <a href={c.notesHref}>Notes</a>
                <a href={c.problemSetsHref}>Problem Sets</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl text-ink dark:text-night-text">Office Hours</h2>
          <p className="mt-3 text-sm text-ink-soft dark:text-night-soft">{officeHours}</p>
        </div>
        <div>
          <h2 className="font-serif text-xl text-ink dark:text-night-text">Resources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {teachingResources.map((r) => (
              <li key={r.label}>
                <a href={r.href} className="text-accent underline underline-offset-4 dark:text-accent-soft">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

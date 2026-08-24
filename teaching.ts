import PageHeader from "@/components/PageHeader";
import { site } from "@/config/site";

export const metadata = { title: "CV" };

const sections = [
  {
    title: "Education",
    items: [
      "[Ph.D. in Mathematics, University, Expected Year] — Advisor: [ADVISOR]",
      "[M.S./B.S. in Subject, University, Year]",
    ],
  },
  {
    title: "Research Experience",
    items: ["[Position], [Institution], [Year–Year] — [one-line description]"],
  },
  {
    title: "Publications",
    items: ["See the full list on the Publications page."],
  },
  {
    title: "Teaching",
    items: ["[Role], [Course], [Institution], [Term]"],
  },
  {
    title: "Awards & Fellowships",
    items: ["[Award name], [Awarding body], [Year]"],
  },
  {
    title: "Conferences & Talks",
    items: ["[Talk title], [Conference], [Location], [Year]"],
  },
  {
    title: "Seminars",
    items: ["[Seminar name], [Institution], [Year]"],
  },
  {
    title: "Academic Service",
    items: ["[Role — e.g. Referee for Journal], [Year–Year]"],
  },
  {
    title: "Technical Skills",
    items: ["[Skill 1], [Skill 2], [Skill 3]"],
  },
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6 dark:border-night-line">
        <PageHeader eyebrow="Curriculum Vitae" title="CV" />
        <a
          href={site.links.cv}
          download
          className="mb-2 inline-block border border-ink px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper dark:border-night-text dark:text-night-text dark:hover:bg-night-text dark:hover:text-night-bg"
        >
          Download CV (PDF)
        </a>
      </div>

      <p className="mt-6 max-w-prose text-sm text-ink-faint dark:text-night-soft">
        Replace <code>public/cv.pdf</code> with your actual CV. The outline below is optional and can
        mirror or summarize the PDF for accessibility and SEO.
      </p>

      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-xl text-ink dark:text-night-text">{s.title}</h2>
            <ul className="mt-3 space-y-2 border-l border-line pl-5 text-sm text-ink-soft dark:border-night-line dark:text-night-soft">
              {s.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

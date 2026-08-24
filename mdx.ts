import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
};

export type BlogMeta = NoteMeta & {
  readingTime: string;
};

export type Publication = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  abstract: string;
};

function listMdxFiles(sub: string): string[] {
  const dir = path.join(CONTENT_DIR, sub);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getAllSlugs(sub: string): string[] {
  return listMdxFiles(sub).map((f) => f.replace(/\.mdx$/, ""));
}

export function getSource(sub: string, slug: string) {
  const filePath = path.join(CONTENT_DIR, sub, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getAllNotes(): NoteMeta[] {
  return getAllSlugs("notes")
    .map((slug) => {
      const { data } = getSource("notes", slug);
      return { slug, ...(data as Omit<NoteMeta, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllBlogPosts(): BlogMeta[] {
  return getAllSlugs("blog")
    .map((slug) => {
      const { data, content } = getSource("blog", slug);
      return {
        slug,
        ...(data as Omit<NoteMeta, "slug">),
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPage(slug: string) {
  const filePath = path.join(CONTENT_DIR, "pages", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getAllPublications(): Publication[] {
  const dir = path.join(CONTENT_DIR, "publications");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      return { slug: f.replace(/\.json$/, ""), ...JSON.parse(raw) } as Publication;
    })
    .sort((a, b) => Number(b.year) - Number(a.year));
}

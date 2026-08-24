import { getPage } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Research" };

export default async function ResearchPage() {
  const { content } = getPage("research");
  const source = await renderMdx(content);
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <PageHeader eyebrow="Mathematics" title="Research" />
      <div className="mt-10 max-w-prose">
        <MDXContent source={source} />
      </div>
    </div>
  );
}

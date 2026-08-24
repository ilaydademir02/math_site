import { getPage } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "About" };

export default async function AboutPage() {
  const { content } = getPage("about");
  const source = await renderMdx(content);
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <PageHeader eyebrow="A little more personal" title="About" />
      <div className="mt-10 max-w-prose">
        <MDXContent source={source} />
      </div>
    </div>
  );
}

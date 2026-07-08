import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getComponentBySlug, getAllComponents } from "@/lib/mdx";
import { ComponentPreview } from "@/components/ui/component-preview";
import { CodeBlock } from "@/components/ui/code-block";
// The component registry is now dynamically loaded from content/components/demos

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((c) => ({
    category: c.category.toLowerCase(),
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const doc = getComponentBySlug(slug);
  
  if (!doc) {
    return { title: "Not Found" };
  }
  
  return {
    title: `${doc.metadata.title} - UI Library`,
    description: doc.metadata.description,
  };
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getComponentBySlug(slug);

  if (!doc) {
    notFound();
  }

  // Custom components to pass to MDX
  const components = {
    ComponentPreview: async ({ name }: { name: string }) => {
      try {
        // Dynamically import the demo component
        const DemoModule = await import(`@/content/components/demos/${name}.demo.tsx`);
        const DemoComp = DemoModule.default;
        
        return (
          <ComponentPreview
            component={<DemoComp />}
            code={<CodeBlock code={doc.code} lang="tsx" />}
            rawCode={doc.code}
          />
        );
      } catch (error) {
        console.error(`Failed to load demo for ${name}:`, error);
        return <div className="p-4 border rounded text-red-500">Demo component '{name}' not found.</div>;
      }
    },
    h2: (props: any) => <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" {...props} />,
    h3: (props: any) => <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
    p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-neutral-700 dark:text-neutral-300" {...props} />,
    code: (props: any) => <code className="relative rounded bg-neutral-100 dark:bg-neutral-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />,
    pre: (props: any) => <CodeBlock code={props.children?.props?.children || ""} lang={props.children?.props?.className?.replace("language-", "") || "bash"} className="mt-6" />,
    table: (props: any) => <div className="my-6 w-full overflow-y-auto"><table className="w-full" {...props} /></div>,
    th: (props: any) => <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right border-neutral-200 dark:border-neutral-800" {...props} />,
    td: (props: any) => <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right border-neutral-200 dark:border-neutral-800" {...props} />,
  };

  return (
    <div className="mx-auto max-w-4xl py-10 px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {doc.metadata.title}
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          {doc.metadata.description}
        </p>
      </div>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={doc.content} components={components} />
      </div>
    </div>
  );
}

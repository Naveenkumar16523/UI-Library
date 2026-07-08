import { getAllComponents } from "@/lib/mdx";
import { SiteGridGallery, GalleryItem } from "@/components/ui/site-grid-gallery";

export default function ComponentsPage() {
  const components = getAllComponents();

  const categories = Array.from(new Set(components.map(c => c.category || "Uncategorized")));

  const items: GalleryItem[] = components.map((comp) => ({
    id: comp.slug,
    title: comp.title,
    category: comp.category || "Uncategorized",
    href: `/components/${(comp.category || "Uncategorized").toLowerCase()}/${comp.slug}`,
    children: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center group-hover:bg-neutral-100/50 dark:group-hover:bg-neutral-800/50 transition-colors">
        <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2">{comp.title}</h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">{comp.description}</p>
      </div>
    )
  }));

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          All Components
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl">
          Browse our complete collection of animated, beautifully crafted components. Use the filters below to find exactly what you need.
        </p>
      </div>

      <SiteGridGallery items={items} categories={categories} />
    </div>
  );
}

import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { getAllComponents } from "@/lib/mdx";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const components = getAllComponents();

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mx-auto max-w-screen-2xl">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-neutral-200 dark:border-neutral-800">
        <Sidebar components={components} />
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
}

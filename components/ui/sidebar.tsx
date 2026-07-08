"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ComponentMetadata } from "@/lib/mdx";

interface SidebarProps {
  components: ComponentMetadata[];
}

export function Sidebar({ components }: SidebarProps) {
  const pathname = usePathname();
  
  // Group components by category
  const grouped = components.reduce((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = [];
    acc[comp.category].push(comp);
    return acc;
  }, {} as Record<string, ComponentMetadata[]>);

  const categories = Object.keys(grouped).sort();

  return (
    <div className="w-full h-full pb-10 pt-8 px-4 overflow-y-auto">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Getting Started
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <Link
              href="/docs"
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                pathname === "/docs" 
                  ? "font-medium text-neutral-900 dark:text-white" 
                  : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              Introduction
            </Link>
          </div>
        </div>

        {categories.map((category) => (
          <div key={category} className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {category}
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {grouped[category].sort((a, b) => a.title.localeCompare(b.title)).map((comp) => {
                const href = `/components/${category.toLowerCase()}/${comp.slug}`;
                const isActive = pathname === href;
                
                return (
                  <Link
                    key={comp.slug}
                    href={href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      isActive 
                        ? "font-medium text-neutral-900 dark:text-white" 
                        : "text-neutral-500 dark:text-neutral-400"
                    )}
                  >
                    {comp.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

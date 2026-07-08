"use client";

import React, { useState, useEffect, useMemo } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X, FileText } from "lucide-react";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { ComponentMetadata } from "@/lib/mdx";

interface SearchDialogProps {
  components: ComponentMetadata[];
}

export function SearchDialog({ components }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Handle Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(components, {
        keys: ["title", "description", "category"],
        threshold: 0.3,
      }),
    [components]
  );

  const staticLinks = [
    { title: "Dashboard", href: "/admin", description: "Manage your components" },
    { title: "Pricing", href: "/pricing", description: "View plans and pricing" },
    { title: "Components", href: "/components", description: "Browse all components" },
    { title: "Login", href: "/login", description: "Sign in to your account" },
  ];

  const results = query ? fuse.search(query).map(r => r.item) : components.slice(0, 3);

  const handleSelectRoute = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const handleSelect = (category: string, slug: string) => {
    setOpen(false);
    router.push(`/components/${category.toLowerCase()}/${slug}`);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="relative inline-flex h-9 w-full sm:w-64 items-center justify-start rounded-[0.5rem] bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-500 shadow-none hover:bg-neutral-200 dark:hover:bg-neutral-800/80 transition-colors">
          <Search className="mr-2 h-4 w-4" />
          <span className="hidden lg:inline-flex">Search components...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-xl">
          <div className="flex items-center border-b border-neutral-200 dark:border-neutral-800 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              placeholder="Search components..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <Dialog.Close asChild>
              <button className="rounded-md opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </Dialog.Close>
          </div>
          <div className="max-h-[300px] overflow-y-auto p-2">
            {!query && (
              <div className="mb-4">
                <div className="px-2 py-1 text-xs font-semibold text-neutral-500">Navigation</div>
                {staticLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleSelectRoute(link.href)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-800">
                      <Search className="h-3 w-3 text-neutral-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">{link.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            <div className="px-2 py-1 text-xs font-semibold text-neutral-500">Components</div>
            {results.length === 0 ? (
              <div className="py-6 text-center text-sm text-neutral-500">
                No components found.
              </div>
            ) : (
              results.map((comp) => (
                <button
                  key={comp.slug}
                  onClick={() => handleSelect(comp.category, comp.slug)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <FileText className="h-4 w-4 text-neutral-500" />
                  <div className="flex flex-col">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">{comp.title}</span>
                    <span className="text-xs text-neutral-500">{comp.description}</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import React from "react";
import Link from "next/link";
import { SearchDialog } from "./search-dialog";
import { getAllComponents } from "@/lib/mdx";
import { AuthButtons } from "./auth-buttons";

export async function Navbar() {
  const components = getAllComponents();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-brand-500 to-brand-700 shadow-[var(--shadow-glow)]" />
            <span className="hidden font-bold sm:inline-block">
              UI Library
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <Link href="/components" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Components
            </Link>
            <Link href="/docs" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/publish" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Publish
            </Link>
            <Link href="/profile" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Profile
            </Link>
          </nav>
        </div>
        
        {/* Mobile menu could go here */}
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchDialog components={components} />
          </div>
          <nav className="flex items-center">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 transition-colors mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            
            <AuthButtons />
          </nav>
        </div>
      </div>
    </header>
  );
}

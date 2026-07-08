import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded-md bg-gradient-to-tr from-purple-500 to-pink-500" />
              <span className="font-bold text-lg">UI Library</span>
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left max-w-sm">
              Beautifully designed, animated components for React and Next.js. Open source and ready to use.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Resources</h4>
              <Link href="/docs" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Documentation</Link>
              <Link href="/components" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Components</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Community</h4>
              <a href="https://github.com/Naveenkumar16523/UI-Library" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} UI Library. All rights reserved.</p>
          <p>
            Built by <a href="https://github.com/Naveenkumar16523" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100">Naveen kumar</a> and <a href="https://github.com/Eakhalaivan" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100">Eakhalaivan</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

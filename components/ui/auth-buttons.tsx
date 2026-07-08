"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AuthButtons() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    router.refresh();
  };

  if (!mounted) return null;

  if (isAuthenticated) {
    return (
      <button
        onClick={handleSignOut}
        className="hidden sm:inline-flex h-9 items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-800 transition-colors mr-4"
      >
        Sign Out
      </button>
    );
  }

  return (
    <Link
      href="/login"
      className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 mr-4"
    >
      Sign In
    </Link>
  );
}

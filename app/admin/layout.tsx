import React from "react";
import Link from "next/link";
import { LayoutDashboard, Users, Component, BarChart3, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-neutral-100 dark:bg-neutral-950">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-lg font-bold text-neutral-900 dark:text-white">Admin Portal</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/admin/components" className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors">
            <Component className="w-5 h-5" />
            Components
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors">
            <Users className="w-5 h-5" />
            Users
          </Link>
          <Link href="/admin/analytics" className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors">
            <BarChart3 className="w-5 h-5" />
            Analytics
          </Link>
        </nav>
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 space-y-1">
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}

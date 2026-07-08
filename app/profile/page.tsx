"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FileText, Bookmark, Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"published" | "saved">("published");

  // In a real app, this would fetch from /api/v1/users/me/components or similar
  const { data: publishedComponents, isLoading: isPubLoading } = useQuery({
    queryKey: ['published-components'],
    queryFn: async () => {
      // Mocking fetch for now until we link full authentication
      return [];
    }
  });

  const { data: savedComponents, isLoading: isSavLoading } = useQuery({
    queryKey: ['saved-components'],
    queryFn: async () => {
      return [];
    }
  });

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">John Doe</h1>
            <p className="text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="flex items-center gap-2 rounded-md bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-red-500">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="border-b border-neutral-200 dark:border-neutral-800 mb-6">
        <div className="flex gap-6">
          <button 
            onClick={() => setActiveTab("published")}
            className={`flex items-center gap-2 pb-3 font-medium transition-colors border-b-2 ${activeTab === "published" ? "border-neutral-900 dark:border-white text-neutral-900 dark:text-white" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
          >
            <FileText className="w-4 h-4" />
            Published
          </button>
          <button 
            onClick={() => setActiveTab("saved")}
            className={`flex items-center gap-2 pb-3 font-medium transition-colors border-b-2 ${activeTab === "saved" ? "border-neutral-900 dark:border-white text-neutral-900 dark:text-white" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
          >
            <Bookmark className="w-4 h-4" />
            Saved
          </button>
        </div>
      </div>

      <div>
        {activeTab === "published" && (
          <div>
            {isPubLoading ? (
              <div className="text-neutral-500">Loading published components...</div>
            ) : publishedComponents?.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl">
                <p className="text-neutral-500 mb-4">You haven't published any components yet.</p>
                <Link href="/publish" className="text-blue-500 hover:underline">Publish your first component</Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Map components here */}
              </div>
            )}
          </div>
        )}

        {activeTab === "saved" && (
          <div>
            {isSavLoading ? (
              <div className="text-neutral-500">Loading saved components...</div>
            ) : savedComponents?.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl">
                <p className="text-neutral-500">You haven't saved any components yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Map saved components here */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

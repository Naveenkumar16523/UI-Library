"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function PublishPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    type: "React",
    dependencies: "",
    files: ""
  });

  const mutation = useMutation({
    mutationFn: async (newComponent: typeof formData) => {
      // Assuming backend is running on 8080
      const res = await fetch("http://localhost:8080/api/v1/components", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComponent)
      });
      if (!res.ok) throw new Error("Failed to publish component");
      return res.json();
    },
    onSuccess: () => {
      router.push("/components");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">Publish Component</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Component Name</label>
          <input 
            required
            type="text" 
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-sm outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Slug</label>
          <input 
            required
            type="text" 
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-sm outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
            value={formData.slug}
            onChange={(e) => setFormData({...formData, slug: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Framework/Type</label>
          <select 
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-sm outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Code (Files JSON)</label>
          <textarea 
            required
            rows={10}
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-sm outline-none focus:border-neutral-900 dark:focus:border-neutral-100 font-mono"
            placeholder='{"/button.tsx": "export function Button() { return <button>Click</button> }"}'
            value={formData.files}
            onChange={(e) => setFormData({...formData, files: e.target.value})}
          />
        </div>
        <button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full rounded-md bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50"
        >
          {mutation.isPending ? "Publishing..." : "Publish Component"}
        </button>
      </form>
    </div>
  );
}

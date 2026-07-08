"use client";

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { RotateCw, Code2, Play, Box } from "lucide-react";
import { Sandpack } from "@codesandbox/sandpack-react";

interface ComponentPreviewProps {
  component: React.ReactNode;
  code: React.ReactNode;
  rawCode?: string;
}

export function ComponentPreview({ component, code, rawCode }: ComponentPreviewProps) {
  const [key, setKey] = useState(0);
  const [framework, setFramework] = useState("react");

  return (
    <Tabs.Root defaultValue="preview" className="relative mt-6 w-full max-w-4xl rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
        <Tabs.List className="flex space-x-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 p-1">
          <Tabs.Trigger
            value="preview"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white"
          >
            <Play className="w-4 h-4" />
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="code"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white"
          >
            <Code2 className="w-4 h-4" />
            Code
          </Tabs.Trigger>
          <Tabs.Trigger
            value="playground"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white"
          >
            <Box className="w-4 h-4" />
            Playground
          </Tabs.Trigger>
        </Tabs.List>
        <button
          onClick={() => setKey(k => k + 1)}
          className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors"
          title="Restart animation"
        >
          <RotateCw className="h-4 w-4" />
        </button>
      </div>

      <Tabs.Content value="preview" className="outline-none">
        <div 
          key={key} 
          className="flex min-h-[350px] w-full items-center justify-center p-10 relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/50"
        >
          {component}
        </div>
      </Tabs.Content>
      
      <Tabs.Content value="code" className="outline-none">
        <div className="w-full relative">
          <div className="absolute right-16 top-4 z-10 flex gap-2">
            <select 
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
              className="bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700 px-2 py-1 outline-none"
            >
              <option value="react">React</option>
              <option value="vue">Vue (Coming Soon)</option>
              <option value="svelte">Svelte (Coming Soon)</option>
              <option value="html">HTML/CSS (Coming Soon)</option>
            </select>
          </div>
          {code}
        </div>
      </Tabs.Content>
      
      <Tabs.Content value="playground" className="outline-none border-t border-neutral-200 dark:border-neutral-800">
        <div className="w-full bg-neutral-950 p-2">
          <Sandpack 
            template="react-ts" 
            theme="dark"
            files={{
              "/App.tsx": rawCode || `export default function App() { return <div>Component</div> }`,
              "/lib/utils.ts": `import { type ClassValue, clsx } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}`,
              "/tsconfig.json": `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`,
              "/index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Playground</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
            }}
            options={{
              showNavigator: false,
              showTabs: false,
              editorHeight: 400,
            }}
            customSetup={{
              dependencies: {
                "framer-motion": "latest",
                "lucide-react": "latest",
                "clsx": "latest",
                "tailwind-merge": "latest"
              }
            }}
          />
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}

import React from "react";
import { codeToHtml } from "shiki";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  lang?: string;
  className?: string;
}

export async function CodeBlock({ code, lang = "tsx", className }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return (
    <div className={`relative group rounded-lg overflow-hidden bg-[#24292e] ${className || ""}`}>
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton value={code} />
      </div>
      <div
        className="p-4 overflow-x-auto text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

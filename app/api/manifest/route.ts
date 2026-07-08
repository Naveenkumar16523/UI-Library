import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const registryPath = path.join(process.cwd(), "registry", "registry.json");
    const registryContent = await fs.readFile(registryPath, "utf-8");
    const registry = JSON.parse(registryContent);

    // Filter and format for the AI-editor manifest
    const manifest = {
      $schema: "https://ui-library.dev/schema/manifest.json",
      name: "UI Library Component Registry",
      description: "A comprehensive registry of production-ready animated React components.",
      components: registry.map((comp: any) => ({
        name: comp.name,
        category: comp.type,
        dependencies: comp.dependencies || [],
        installCommand: \`npx shadcn-ui@latest add \${comp.name}\`,
        sourceFiles: comp.files.map((file: any) => file.path),
      }))
    };

    return NextResponse.json(manifest);
  } catch (error) {
    console.error("Failed to generate AI manifest:", error);
    return NextResponse.json({ error: "Failed to load component registry" }, { status: 500 });
  }
}

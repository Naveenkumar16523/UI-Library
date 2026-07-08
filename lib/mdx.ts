import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/components");
const REGISTRY_DIR = path.join(process.cwd(), "components/ui");

export interface ComponentMetadata {
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
}

export interface ComponentDoc {
  metadata: ComponentMetadata;
  content: string;
  code: string;
}

export function getAllComponents(): ComponentMetadata[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  
  const files = fs.readdirSync(CONTENT_DIR);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(CONTENT_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      
      return {
        ...(data as Omit<ComponentMetadata, "slug">),
        slug: file.replace(/\.mdx$/, ""),
      };
    });
}

export function getComponentBySlug(slug: string): ComponentDoc | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  // Read source code
  let code = "";
  const codePath = path.join(REGISTRY_DIR, `${slug}.tsx`);
  if (fs.existsSync(codePath)) {
    code = fs.readFileSync(codePath, "utf8");
  }
  
  return {
    metadata: {
      ...(data as Omit<ComponentMetadata, "slug">),
      slug,
    },
    content,
    code,
  };
}

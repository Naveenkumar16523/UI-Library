export const metadata = {
  title: "Documentation - UI Library",
  description: "Learn how to use the UI Library components.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl py-10 px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Documentation
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          Welcome to the UI Library documentation.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          This UI library is built using React, Next.js, Tailwind CSS, and Framer Motion. 
          It provides a set of beautifully animated, highly customizable components that you can copy and paste directly into your projects.
        </p>
        <h2>Getting Started</h2>
        <p>
          You don't need to install this library as an npm package. Instead, you can browse the components, view their source code, and copy them directly into your project.
        </p>
        <p>
          We also support the shadcn-ui CLI for automated installation.
        </p>
      </div>
    </div>
  );
}

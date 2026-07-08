import { AnimatedTabs } from "@/components/ui/animated-tabs";

export default function AnimatedTabsDemo() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Project Overview</h3>
          <p className="text-neutral-500 dark:text-neutral-400">
            This project aims to revolutionize the way we build user interfaces. By utilizing an animated tab system, we provide a more engaging experience.
          </p>
        </div>
      ),
    },
    {
      id: "features",
      label: "Features",
      content: (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Key Features</h3>
          <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-400">
            <li>Smooth Framer Motion layout animations</li>
            <li>Fully accessible Radix UI primitives</li>
            <li>Keyboard navigation support</li>
            <li>Responsive design</li>
          </ul>
        </div>
      ),
    },
    {
      id: "pricing",
      label: "Pricing",
      content: (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Pricing Plans</h3>
          <p className="text-neutral-500 dark:text-neutral-400">
            Completely free and open source. Just copy and paste into your own project!
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full items-center justify-center p-8">
      <AnimatedTabs tabs={tabs} />
    </div>
  );
}

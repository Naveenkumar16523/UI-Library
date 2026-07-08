import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function BentoGridDemo() {
  const items = [
    { title: "Dashboard", description: "Monitor your entire system from a single pane of glass.", className: "md:col-span-2" },
    { title: "Analytics", description: "Deep dive into your data.", className: "md:col-span-1" },
    { title: "Security", description: "Enterprise-grade protection.", className: "md:col-span-1" },
    { title: "Automations", description: "Automate your workflows easily.", className: "md:col-span-2" },
  ];

  return (
    <div className="w-full py-8">
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

import { SiteGridGallery } from "@/components/ui/site-grid-gallery";
import { GradientButton } from "@/components/ui/gradient-button";
import { PulseLoader } from "@/components/ui/pulse-loader";

export default function SiteGridGalleryDemo() {
  const items = [
    {
      id: "btn",
      title: "Gradient Button",
      category: "Buttons",
      href: "#",
      children: <GradientButton text="Example" />,
    },
    {
      id: "loader",
      title: "Pulse Loader",
      category: "Loaders",
      href: "#",
      children: <PulseLoader />,
    },
    {
      id: "placeholder",
      title: "Coming Soon",
      category: "Misc",
      href: "#",
      children: <div className="text-sm text-neutral-400">Future component</div>,
    }
  ];

  const categories = ["Buttons", "Loaders", "Misc"];

  return (
    <div className="w-full p-4 bg-white dark:bg-neutral-950 rounded-xl">
      <SiteGridGallery items={items} categories={categories} />
    </div>
  );
}

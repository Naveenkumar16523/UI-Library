"use client";
import { useState } from "react";
import { PricingToggle } from "@/components/ui/pricing-toggle";

export default function PricingToggleDemo() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12 bg-neutral-50 dark:bg-neutral-950 rounded-xl">
      <PricingToggle onToggle={setIsAnnual} />
      
      <div className="text-center">
        <div className="text-5xl font-bold text-neutral-900 dark:text-white transition-all duration-300">
          ${isAnnual ? "19" : "29"}
        </div>
        <div className="text-sm text-neutral-500 mt-2">
          per user / month {isAnnual && "(billed annually)"}
        </div>
      </div>
    </div>
  );
}

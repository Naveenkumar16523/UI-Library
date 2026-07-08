"use client";

import { useState } from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { PricingToggle } from "@/components/ui/pricing-toggle";
import { SplitText } from "@/components/ui/split-text";
import { Check } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for indie hackers and small projects.",
      priceMonthly: 19,
      priceAnnual: 15,
      features: ["All UI components", "Community support", "Free updates", "Personal use"],
    },
    {
      name: "Pro",
      description: "For professional developers and agencies.",
      priceMonthly: 49,
      priceAnnual: 39,
      features: ["Everything in Starter", "Premium templates", "Priority support", "Commercial use", "Source code access"],
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "For large teams with advanced needs.",
      priceMonthly: 99,
      priceAnnual: 79,
      features: ["Everything in Pro", "Custom integrations", "Dedicated account manager", "SLA", "Advanced security"],
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          <SplitText text="Simple, transparent pricing" />
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Always know what you'll pay.
        </p>
        <div className="flex justify-center mb-16">
          <PricingToggle onToggle={setIsAnnual} />
        </div>
      </div>

      <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
        {plans.map((plan) => (
          <SpotlightCard 
            key={plan.name} 
            className={`p-8 xl:p-10 flex flex-col justify-between ${plan.highlight ? 'ring-2 ring-brand-500 bg-white/80 dark:bg-neutral-900/80' : 'bg-white/50 dark:bg-neutral-900/50'}`}
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className={`text-lg font-semibold leading-8 ${plan.highlight ? 'text-brand-600 dark:text-brand-400' : 'text-neutral-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-600 dark:text-brand-400">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-neutral-500 dark:text-neutral-400">
                  /month
                </span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-brand-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <GradientButton 
                text={`Get started with ${plan.name}`} 
                className="w-full"
              />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

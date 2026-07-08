"use client";
import React, { useState } from "react";
import { Stepper } from "@/components/ui/stepper";
import { Button } from "@/components/ui/button";

export default function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { title: "Account", description: "Create your account" },
    { title: "Profile", description: "Setup your profile" },
    { title: "Plan", description: "Select subscription" },
    { title: "Checkout", description: "Payment details" },
  ];

  return (
    <div className="flex flex-col h-[400px] w-full items-center justify-center p-8 gap-16">
      <Stepper steps={steps} currentStep={currentStep} className="w-full max-w-2xl" />
      
      <div className="flex gap-4">
        <Button 
          variant="secondary" 
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button 
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}

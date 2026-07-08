"use client";
import { useRef } from "react";
import { Confetti, ConfettiRef } from "@/registry/magicui/confetti";
import { Button } from "@/components/ui/button";

export default function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="flex relative h-[300px] w-full items-center justify-center overflow-hidden">
      <Button onClick={() => confettiRef.current?.fire({})}>Trigger Celebration!</Button>
      <Confetti ref={confettiRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" manualstart={true} />
    </div>
  );
}

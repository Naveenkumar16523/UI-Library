import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { GradientMeshBackground } from "@/components/ui/gradient-mesh-background";
import { SplitText } from "@/components/ui/split-text";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GradientMeshBackground />
      </div>

      <div className="w-full max-w-md z-10">
        <SpotlightCard className="w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-8 border border-white/20 dark:border-neutral-800/50 shadow-2xl rounded-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              <SplitText text="Welcome back" />
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="flex h-10 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 transition-colors backdrop-blur-sm"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <Link href="#" className="text-xs text-brand-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 transition-colors backdrop-blur-sm"
                required
              />
            </div>
            
            <div className="pt-4">
              <GradientButton text="Sign In" className="w-full" />
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-500">
            Don't have an account?{" "}
            <Link href="/signup" className="text-brand-500 hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

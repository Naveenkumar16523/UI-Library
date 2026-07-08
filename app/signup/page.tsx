"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Confetti } from "@/registry/magicui/confetti";
import { Eye, EyeOff } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientMeshBackground } from "@/components/ui/gradient-mesh-background";
import { GradientButton } from "@/components/ui/gradient-button";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const enteredUsername = formData.get("username") as string;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("isAuthenticated", "true");
      setUsername(enteredUsername || "User");
      setShowWelcome(true);
      setTimeout(() => {
        router.push("/components");
      }, 5000);
    }, 1500);
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <GradientMeshBackground />
      </div>

      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-3xl p-8 text-center shadow-2xl overflow-hidden"
            >
              <h3 className="relative z-10 text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Welcome, {username}!
              </h3>
              <p className="relative z-10 text-neutral-600 dark:text-neutral-400 mb-8">
                Your account has been created successfully. You now have full access to copy the components.
              </p>
              <button
                onClick={() => router.push("/components")}
                className="relative z-10 w-full rounded-xl bg-neutral-900 dark:bg-white px-4 py-3 text-sm font-semibold text-white dark:text-neutral-900 shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                Continue to Library
              </button>

              <Confetti
                className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                options={{ particleCount: 200, spread: 160, startVelocity: 40 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md z-10"
      >
        <SpotlightCard className="w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-8 border border-white/20 dark:border-neutral-800/50 shadow-2xl rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Join us to get started
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("isAuthenticated", "true");
                  router.push("/components");
                }}
                className="inline-flex w-full justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition-colors"
              >
                <Icons.google className="h-5 w-5" />
                <span className="sr-only">Sign up with Google</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("isAuthenticated", "true");
                  router.push("/components");
                }}
                className="inline-flex w-full justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition-colors"
              >
                <Icons.github className="h-5 w-5" />
                <span className="sr-only">Sign up with GitHub</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("isAuthenticated", "true");
                  router.push("/components");
                }}
                className="inline-flex w-full justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition-colors"
              >
                <Icons.twitter className="h-5 w-5" />
                <span className="sr-only">Sign up with Twitter</span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-transparent px-2 text-neutral-500">
                  Or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full appearance-none rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm transition-colors"
                  placeholder="johndoe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm transition-colors"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="block w-full appearance-none rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm px-3 py-2 pr-10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="block w-full appearance-none rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm px-3 py-2 pr-10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-500 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <GradientButton text={isLoading ? "Creating account..." : "Create account"} className="w-full" disabled={isLoading} />
              </div>
            </form>

            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-neutral-900 dark:text-white hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}

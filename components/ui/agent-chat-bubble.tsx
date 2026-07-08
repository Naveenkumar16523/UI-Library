import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AgentChatBubble = ({
  message,
  className,
  isUser = false,
  avatarUrl,
}: {
  message: React.ReactNode;
  className?: string;
  isUser?: boolean;
  avatarUrl?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={cn(
        "flex w-full max-w-2xl gap-4",
        isUser ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        {avatarUrl ? (
          <img src={avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-medium">
            {isUser ? "U" : "AI"}
          </span>
        )}
      </div>
      <div
        className={cn(
          "relative flex max-w-[80%] flex-col gap-2 rounded-2xl px-4 py-3 text-sm shadow-sm",
          isUser
            ? "bg-brand-500 text-white rounded-tr-none"
            : "bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 dark:border dark:border-neutral-800 rounded-tl-none border border-neutral-100"
        )}
      >
        {message}
      </div>
    </motion.div>
  );
};

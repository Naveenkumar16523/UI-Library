import { StatCounter } from "@/components/ui/stat-counter";

export default function StatCounterDemo() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-extrabold text-brand-600 dark:text-brand-400">
            <StatCounter value={10000} />+
          </div>
          <p className="mt-2 text-sm font-medium text-neutral-500">Active Users</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-400">
            <StatCounter value={99} />%
          </div>
          <p className="mt-2 text-sm font-medium text-neutral-500">Uptime Guarantee</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-extrabold text-pink-600 dark:text-pink-400">
            <StatCounter value={500} />M
          </div>
          <p className="mt-2 text-sm font-medium text-neutral-500">API Requests</p>
        </div>
      </div>
    </div>
  );
}

import { StatCounter } from "@/components/ui/stat-counter";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Activity, Users, Download, Star } from "lucide-react";
import { getAllComponents } from "@/lib/mdx";

export default function AdminDashboard() {
  const components = getAllComponents();
  const totalComponents = components.length;
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-neutral-500 mt-1">Overview of your component library platform.</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline">v1.2.0-beta</Badge>
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium">
                U{i}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        <SpotlightCard className="p-6 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-500/10 text-brand-600 rounded-lg">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Total Components</p>
              <h3 className="text-2xl font-bold mt-1 text-neutral-900 dark:text-white">
                <StatCounter value={totalComponents} />
              </h3>
            </div>
          </div>
        </SpotlightCard>
        
        <SpotlightCard className="p-6 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 text-purple-600 rounded-lg">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Active Users</p>
              <h3 className="text-2xl font-bold mt-1 text-neutral-900 dark:text-white">
                <StatCounter value={1432} />
              </h3>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-6 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-500/10 text-pink-600 rounded-lg">
              <Download className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">NPM Installs</p>
              <h3 className="text-2xl font-bold mt-1 text-neutral-900 dark:text-white">
                <StatCounter value={89241} />
              </h3>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-6 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 text-orange-600 rounded-lg">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">GitHub Stars</p>
              <h3 className="text-2xl font-bold mt-1 text-neutral-900 dark:text-white">
                <StatCounter value={1205} />
              </h3>
            </div>
          </div>
        </SpotlightCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
              <h2 className="font-semibold">Recent Components</h2>
              <button className="text-sm text-brand-500 font-medium">View all</button>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {components.slice(0, 5).map((comp) => (
                <div key={comp.slug} className="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
                      C
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white">{comp.title}</p>
                      <p className="text-sm text-neutral-500">{comp.category}</p>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-brand-500/10 text-brand-600 border-0 hover:bg-brand-500/20">Published</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <h2 className="font-semibold">System Status</h2>
            </div>
            <div className="p-6 space-y-6">
              {[
                { name: "Registry API", status: "Operational", color: "bg-green-500" },
                { name: "Documentation", status: "Operational", color: "bg-green-500" },
                { name: "Build Pipeline", status: "Deploying", color: "bg-yellow-500" },
                { name: "CDN Edge", status: "Operational", color: "bg-green-500" }
              ].map((service) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${service.color} animate-pulse`} />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{service.name}</span>
                  </div>
                  <span className="text-sm text-neutral-500">{service.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

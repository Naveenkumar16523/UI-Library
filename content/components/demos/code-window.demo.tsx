import { CodeWindow } from "@/components/ui/code-window";

export default function CodeWindowDemo() {
  return (
    <div className="flex w-full items-center justify-center p-8 bg-neutral-950">
      <CodeWindow title="server.js" className="w-full max-w-lg">
        <pre className="text-neutral-300">
          <span className="text-pink-500">import</span> express <span className="text-pink-500">from</span> <span className="text-green-400">'express'</span>;<br/>
          <br/>
          <span className="text-pink-500">const</span> app = <span className="text-blue-400">express</span>();<br/>
          <br/>
          app.<span className="text-blue-400">get</span>(<span className="text-green-400">'/'</span>, (req, res) =&gt; {'{'}<br/>
          &nbsp;&nbsp;res.<span className="text-blue-400">json</span>({'{'} hello: <span className="text-green-400">'world'</span> {'}'});<br/>
          {'}'});<br/>
          <br/>
          app.<span className="text-blue-400">listen</span>(<span className="text-purple-400">3000</span>, () =&gt; console.<span className="text-blue-400">log</span>(<span className="text-green-400">'Ready!'</span>));
        </pre>
      </CodeWindow>
    </div>
  );
}

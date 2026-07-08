import { AgentChatBubble } from "@/components/ui/agent-chat-bubble";

export default function AgentChatBubbleDemo() {
  return (
    <div className="flex h-[400px] w-full flex-col gap-4 p-8 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <AgentChatBubble 
        isUser 
        message="Can you help me design a landing page?" 
      />
      <AgentChatBubble 
        message={
          <div className="flex flex-col gap-2">
            <p>I'd love to help you design a landing page!</p>
            <p>Let's start by adding a beautiful hero section with a gradient button.</p>
          </div>
        } 
      />
    </div>
  );
}

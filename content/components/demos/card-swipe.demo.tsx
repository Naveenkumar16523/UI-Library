import { CardSwipe } from "@/components/ui/card-swipe";

export default function CardSwipeDemo() {
  const cards = [
    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 p-8 text-center">
      <h3 className="text-2xl font-bold mb-2">Swipe Right!</h3>
      <p>Discover amazing new components for your Next.js application.</p>
    </div>,
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-100 dark:bg-rose-900/20 text-rose-900 dark:text-rose-100 p-8 text-center">
      <h3 className="text-2xl font-bold mb-2">Swipe Left!</h3>
      <p>Discard the boring layouts of the past.</p>
    </div>,
    <div className="w-full h-full flex flex-col items-center justify-center bg-emerald-100 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100 p-8 text-center">
      <h3 className="text-2xl font-bold mb-2">You're All Set!</h3>
      <p>Start building with UI Library today.</p>
    </div>
  ];

  return (
    <div className="flex h-[500px] w-full items-center justify-center">
      <CardSwipe cards={cards} />
    </div>
  );
}

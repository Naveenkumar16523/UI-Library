import { Accordion } from "@/components/ui/accordion";

export default function AccordionDemo() {
  const items = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML where possible.",
    },
    {
      title: "Is it animated?",
      content: "Yes. It uses Framer Motion's AnimatePresence to smoothly animate the height from 0 to auto.",
    },
    {
      title: "Can I use multiple open sections?",
      content: "By passing the allowMultiple prop, you can allow multiple sections to be open concurrently.",
    },
  ];

  return (
    <div className="flex h-[350px] w-full items-center justify-center p-8">
      <Accordion items={items} />
    </div>
  );
}

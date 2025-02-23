import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import getAllWritings from "@/lib/getAllWritings";

export default async function AccordionWriting() {
  const writings = await getAllWritings();
  console.log(writings);
  return (
    <Accordion type="single" collapsible>
      {writings.map((writing) => (
        <AccordionItem key={writing.id} value={writing.id.toString()}>
          <AccordionTrigger className="text-white text-3xl">
            {writing.title}
          </AccordionTrigger>
          <AccordionContent className="text-white text-xl">
            {writing.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

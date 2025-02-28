import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default async function AccordionWriting({ writing }) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
      <AccordionItem
        key={writing.id}
        value={String(writing.id)}
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <AccordionTrigger className="hover:no-underline py-4 text-white">
          <h2 className="text-2xl font-semibold text-left">
            {writing.title}
            {writing.created_at && (
              <span className="block text-sm text-gray-500 mt-1 font-normal">
                {new Date(writing.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </h2>
        </AccordionTrigger>

        <AccordionContent className="pb-4">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-white">{writing.short_desc}</p>
            <Link href={`/writings/${writing.slug}`}>
              <SquareArrowOutUpRight
                strokeWidth={2}
                className="text-white inline-block"
              />
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

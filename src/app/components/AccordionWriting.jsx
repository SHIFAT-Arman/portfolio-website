import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { createClient } from "@/lib/supabase/server"; // Updated path
import MarkdownContent from "@/app/components/MarkdownContent"; // Consistent naming
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default async function AccordionWriting() {
  // Fetch data using server-side supabase client
  const supabase = await createClient();
  const { data: writings, error } = await supabase
    .from("posts")
    .select("id, title, short_desc, created_at, slug")
    .order("created_at", { ascending: false });

  // Handle errors
  if (error) {
    console.error("Supabase query error:", error);
    return (
      <div className="text-red-500 p-4 border rounded-lg bg-red-50">
        Error loading content: {error.message}
      </div>
    );
  }

  // Handle empty state
  if (!writings?.length) {
    return (
      <div className="text-gray-400 p-4 text-center">
        No writings available yet
      </div>
    );
  }
  console.log(writings);

  return (
    <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
      {writings.map((writing) => (
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
              <MarkdownContent content={writing.short_desc} />
              <Link href={`/writings/${writing.slug}`} >
                <SquareArrowOutUpRight className="inline-block text-white" />
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

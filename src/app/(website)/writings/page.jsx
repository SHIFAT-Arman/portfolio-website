import React from "react";
import AccordionWriting from "@/app/components/AccordionWriting";
import { createClient } from "@/lib/supabase/server";
import { Accordion } from "@/components/ui/accordion";
import ScrollProgress from "@/app/components/ScrollProgress__";

export default async function Writings() {
  // Fetch data using server-side supabase client
  const supabase = await createClient();
  const { data: writings, error } = await supabase
    .from("posts")
    .select("id, title, short_desc, created_at, slug")
    .order("created_at", { ascending: false })
    .limit(10);
  console.log(writings.length);

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
    <>
      <ScrollProgress />
      <div
        className="bg-gray-900 relative isolate mx-auto max-w-7xl px-6 lg:px-8 pt-20"
        id="writings"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white py-8">
          Writings
        </h2>

        {/* Accordion wraps all items */}
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto"
        >
          {writings.map((writing) => (
            <AccordionWriting key={writing.id} writing={writing} />
          ))}
        </Accordion>
      </div>
    </>
  );
}

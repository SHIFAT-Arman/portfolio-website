import React from "react";
import AccordionWriting from "@/app/components/AccordionWriting";

export default function Writings() {
  return (
    <div
      className="bg-gray-900 relative isolate mx-auto max-w-7xl px-6 lg:px-8 pt-20"
      id="writings"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-white py-8">
        Writings
      </h2>
      <AccordionWriting />
    </div>
  );
}

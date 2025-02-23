import Comments from "@/app/components/Comments";
import getComment from "@/lib/getComment";
import getWriting from "@/lib/getWritings";
import getAllWritings from "@/lib/getAllWritings";
import React, { Suspense } from "react";

export default async function WritingPage({ params }) {
  const { id } = params;
  const writingPromise = getWriting(id);
  // const comments = await getComments(id); not correct implementation
  const commentsPromise = getComment(id);

  const writing = await writingPromise;

  return (
    <div className="relative isolate mx-auto max-w-7xl px-6 sm:mt-10 lg:px-8 text-white">
      <h2 className="text-3xl">{writing.title}</h2>

      <p className="mt-6 text-2xl">{writing.body}</p>

      <hr />
      <Suspense fallback="Loading comments...">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
export async function generateStaticParams() {
  const writings = await getAllWritings();

  return writings.map((writing) => ({
    id: writing.id.toString(),
  }));
}

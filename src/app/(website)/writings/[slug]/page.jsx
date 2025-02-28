// import Comments from "@/app/components/Comments";
// import getComment from "@/lib/getComment";
// import getWriting from "@/lib/getWritings";
// import getAllWritings from "@/lib/getAllWritings";
// import React, { Suspense } from "react";

// export default async function WritingPage({ params }) {
//   const { id } = params;
//   const writingPromise = getWriting(id);
//   // const comments = await getComments(id); not correct implementation
//   const commentsPromise = getComment(id);

//   const writing = await writingPromise;

//   return (
//     <div className="relative isolate mx-auto max-w-7xl px-6 sm:mt-10 lg:px-8 text-white">
//       <h2 className="text-3xl">{writing.title}</h2>

//       <p className="mt-6 text-2xl">{writing.body}</p>

//       <hr />
//       <Suspense fallback="Loading comments...">
//         <Comments promise={commentsPromise} />
//       </Suspense>
//     </div>
//   );
// }
// export async function generateStaticParams() {
//   const writings = await getAllWritings();

//   return writings.map((writing) => ({
//     id: writing.id.toString(),
//   }));
// }

import { createClient } from "@/lib/supabase/server";
import MarkdownContent from "@/app/components/MarkdownContent";
import { cookies } from "next/headers";
import ScrollProgress from "@/app/components/ScrollProgress__";

export default async function PostPage({ params }) {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  // Fetch post dynamically on each request
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();
  if (error || !post) {
    return <div className="container mx-auto py-12">Post not found</div>;
  }
  return (
    <>
      <ScrollProgress />

      <article className=" max-w-7xl px-6 lg:px-8 pt-20 mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mt-4">{post.title}</h1>
          <time className="text-gray-300 mt-2 block">
            {new Date(post.created_at).toLocaleDateString()}
          </time>
        </header>
        <MarkdownContent content={post.content} />
      </article>
    </>
  );
}

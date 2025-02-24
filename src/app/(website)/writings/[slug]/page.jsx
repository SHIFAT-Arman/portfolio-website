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

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);
  console.log(posts.slug);
  return (
    posts?.map((post) => ({
      slug: post.slug,
    })) || []
  );
}

export default async function PostPage({ params }) {

  const supabase = createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();
  console.log(post);
  if (!post) {
    return <div className="container mx-auto py-12">Post not found</div>;
  }
  console.log(post.title);
  return (
    <article className="container mx-auto py-12 max-w-3xl pt-24">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">{post.title}</h1>
        <time className="text-gray-600 mt-2 block">
          {new Date(post.created_at).toLocaleDateString()}
        </time>
      </header>

      <MarkdownContent content={post.content} />
    </article>
  );
}

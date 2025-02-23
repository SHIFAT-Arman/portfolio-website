import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div className=" text-white mt-5">
      <h1 className="text-white text-2xl">Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li className="mb-2" key={comment.id}>
            {comment.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

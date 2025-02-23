export default async function getComment(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

  return result.json();
}
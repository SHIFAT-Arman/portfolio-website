export default async function getWriting(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return result.json();
}
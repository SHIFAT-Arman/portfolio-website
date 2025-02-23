export default async function getAllWritings() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
    // {
    //   // cache: "no-store"
    //   next: {
    //     revalidate: 10 // check for new data after 10s
    //   }
    // }
  )

  return result.json();
}
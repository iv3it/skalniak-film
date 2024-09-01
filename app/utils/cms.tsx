export async function fetchData(query : {}) {
  const response = await fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
   {
     method: 'POST',
     headers: {
       Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
       'content-type': 'application/json',
     },
     body: JSON.stringify({ query }),
   }
  ).then((response) => response.json())

  return response
}
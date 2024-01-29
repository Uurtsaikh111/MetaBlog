export function Highlight() {
  return;
}

export async function getStaticProps() {
  const res = await fetch(`https://dev.to/api/articles?top=1&per_page=5
    `);
  console.log(res);
}

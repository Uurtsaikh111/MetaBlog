import Highlight from "@/components/Highlight";
import React from "react";

export default function Home(props) {
  const { articles } = props;
  console.log(articles);
  return (
    <div>
      {articles.map((data) => (
        <Highlight data={data} />
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const result = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const posts = await result.json();
  console.log(posts);
  return {
    props: { articles: posts },
  };
}

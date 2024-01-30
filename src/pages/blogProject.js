import Highlight from "@/components/Highlight";

export default function BlogProject(props) {
  const { articles } = props;
  console.log("articles", articles);

  return (
    <div>
      {articles.map((data) => (
        <Highlight data={data} />
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const result = await fetch("https://dev.to/api/articles?per_page=10&top=2");
  const posts = await result.json();
  console.log(posts);
  return {
    props: { articles: posts },
  };
}

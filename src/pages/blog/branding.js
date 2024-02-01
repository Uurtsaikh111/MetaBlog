import React, { useState } from "react";
import SubHeader from "@/components/Subheader";
import { Card } from "@/components/Branding";

export default function Page({ desings }) {
  const [articles, setArticles] = useState(desings);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMoreHandler() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=3&page=${pageNumber}`
    );
    const data = await response.json();
    setArticles([...articles, ...data]);
    setPageNumber(pageNumber + 1);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <SubHeader />
      <div className="flex flex-wrap gap-5">
        {articles.map((article) => {
          return (
            <Card
              key={`${article.title}-${article.id}`}
              title={article.title}
              img_url={article.social_image}
            />
          );
        })}
      </div>
      <div className="w-full bg-red-100 flex justify-center items-center">
        <button className="m-10" onClick={loadMoreHandler}>
          Load More
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://dev.to/api/articles?tag=design&per_page=3`
  );
  const desings = await response.json();
  return {
    props: { desings },
  };
};

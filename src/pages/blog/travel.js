import BlogPost from "@/components/BlogPost";
import SubHeader from "@/components/Subheader";
import React, { useState } from "react";

export default function Page({ posts1 }) {
  const [articles, setArticles] = useState(posts1);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMoreHandler() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?per_page=3&tag=travel&page=${pageNumber}`
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
    <div className="flex gap-[30px]">
      <div className="flex flex-col gap-[32px] items-start justify-center w-[1216px] m-auto">
        <SubHeader />
        <div className="flex flex-wrap gap-[20px]">
          {articles.map((data2) => (
            <BlogPost
              data2={data2}
              key={`${data2.title}-${data2.id}`}
              id={data2.id}
            />
          ))}
        </div>
        <button
          className="w-[123px] h-[48px] rounded-md  border px-[20px] py-[12px] flex m-auto mb-[40px]"
          onClick={loadMoreHandler}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const posts2 = await fetch(
    "https://dev.to/api/articles?per_page=3&tag=travel"
  );
  const posts1 = await posts2.json();
  return {
    props: { posts1 },
  };
}

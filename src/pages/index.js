import BlogPost from "@/components/BlogPost";
import Highlight from "@/components/Highlight";
import Trending from "@/components/Trending";
import Link from "next/link";
import React,{useState} from "react";

export default function Home({ posts, trending, posts1 } ) {

 
  const [articles, setArticles] = useState(posts1);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMoreHandler() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?per_page=3&page=${pageNumber}`
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
    <div className="flex flex-col gap-[100px] items-center justify-between">
      <div>
        {" "}
        {posts.map((data, key) => (
          <Link 
          key={key}
          href={`/article/${data.id}`}>
            <Highlight data={data} />
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-[30px] items-start w-[1216px]">
        <div className="text-2xl text-[#181A2A] font-bold">Trending</div>
        <div className="w-[1216px] flex gap-[20px]">
          {trending.map((data1, index) => (
            <Link
            key={index}
            href={`/article/${data1.id}`}>
              <Trending data1={data1} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start w-[1216px]">
        <div className="text-2xl text-[#181A2A] font-bold">All Blog Post</div>
        <div className="flex flex-wrap gap-[20px]">
          {articles.map((data2,key) => (
            <Link 
            key={key}
            href={`/article/${data2.id}`}>
              <BlogPost data2={data2} 
              key={`${data2.title}-${data2.id}`}
              id={data2.id}
              />
            </Link>
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
export async function getStaticProps() {
  const result = await fetch("https://dev.to/api/articles?per_page=1&latest=1");
  const posts = await result.json();

  const trendings = await fetch("https://dev.to/api/articles?per_page=4&top=1");
  const trending = await trendings.json();

  const posts2 = await fetch("https://dev.to/api/articles?per_page=6&top=9");
  const posts1 = await posts2.json();
  return {
    props: { posts, trending, posts1 },
  };
}

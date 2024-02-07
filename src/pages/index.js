import BlogPost from "@/components/BlogPost";
import Highlight from "@/components/Highlight";
import Trending from "@/components/Trending";
import Link from "next/link";
import React from "react";

export default function Home(props) {
  const { posts, trending, posts1 } = props;
  console.log(posts);
  return (
    <div className="flex flex-col gap-[100px] items-center justify-between">
      <div>
        {" "}
        {posts.map((data) => (
          <Link href={`/article/${data.id}`}>
            <Highlight data={data} />
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-[30px] items-start w-[1216px]">
        <div className="text-2xl text-[#181A2A] font-bold">Trending</div>
        <div className="w-[1216px] flex gap-[20px]">
          {trending.map((data1) => (
            <Link href={`/article/${data1.id}`}>
              <Trending data1={data1} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start w-[1216px]">
        <div className="text-2xl text-[#181A2A] font-bold">All Blog Post</div>
        <div className="flex flex-wrap gap-[20px]">
          {posts1.map((data2) => (
            <Link href={`/article/${data2.id}`}>
              <BlogPost data2={data2} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const result = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const posts = await result.json();

  const trendings = await fetch("https://dev.to/api/articles?per_page=4&top=1");
  const trending = await trendings.json();

  const posts2 = await fetch("https://dev.to/api/articles?per_page=6&top=9");
  const posts1 = await posts2.json();
  return {
    props: { posts, trending, posts1 },
  };
}

import BlogPost from "@/components/BlogPost";
import SubHeader from "@/components/Subheader";
import React from "react";

const Blog = (props) => {
  const { posts1 } = props;
  return (
    <div className="flex gap-[30px]">
      <div className="flex flex-col gap-[32px] items-start justify-center w-[1216px] m-auto">
        <SubHeader />
        <div className="flex flex-wrap gap-[20px]">
          {posts1.map((data2) => (
            <BlogPost data2={data2} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;

export async function getStaticProps() {
  const posts2 = await fetch("https://dev.to/api/articles?per_page=3");
  const posts1 = await posts2.json();
  return {
    props: { posts1 },
  };
}

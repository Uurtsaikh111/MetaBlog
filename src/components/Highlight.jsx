import React from "react";

export default function Highlight(props) {
console.log(props);

return (
<div>hello
{/* {posts.map((data)=>{
return (
  <div className="border flex gap-4 flex-col p-3 rounded-lg bg-gray-50">
    <img src={data.social_image} alt="" className="rounded-lg"/>
    <h1>{data.title}</h1>
    <h1>{data.description}</h1>
  </div>
)
})} */}
</div>
);
}

export async function getStaticProps() {
  const result = await fetch(`https://dev.to/api/articles?top=1&per_page=10`);
  const posts = await result.json()
 
  return {
props:{posts,
},

  };
}

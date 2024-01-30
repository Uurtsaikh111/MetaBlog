import React from "react";

export default function Highlight(props) {
  console.log("data", props);
  const { data } = props;
  return (
    <div>
      <div className="border flex gap-4 flex-col p-3 rounded-lg bg-gray-50">
        <img src={data.social_image} alt="" className="rounded-lg" />
        <h1>{data.title}</h1>

        <h1>{data.description}</h1>
      </div>
    </div>
  );
}

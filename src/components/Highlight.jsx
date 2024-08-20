import Link from "next/link";
import React from "react";

export default function Highlight(props) {
  const { data } = props;
  return (
    <div>
      <div className="flex gap-4 flex-col p-3 rounded-lg bg-gray-50 relative">
        <img
          src={data.social_image}
          alt=""
          className="rounded-lg w-[1216px] h-[600px]"
        />
        <div className="w-[598px] flex flex-col gap-[24px] items-start p-[40px] rounded-lg bg-white absolute left-[30px] bottom-[30px]">
          <h3 className="flex justify-center items-center px-[10px] py-[4px] rounded-md">
            {data.tag_list[0]}
          </h3>
          <h2>{data.title}</h2>
          <p>{new Date(data.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

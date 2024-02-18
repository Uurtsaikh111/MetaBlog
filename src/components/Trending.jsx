import React from "react";

export default function Trending(props) {
  const { data1 } = props;
  return (
    <div>
      <div className="relative">
        <img
          src={data1.social_image}
          alt=""
          className="rounded-lg w-[289px] h-[320px] object-cover"
        />
        <div className="w-[230px] flex flex-col items-start gap-[16px] absolute left-[30px] bottom-[30px]">
          <h3 className=" flex px-[10px] py-[4px] rounded-md">
            {data1.tag_list[0]}
          </h3>
          <h1 className="bg">{data1.title}</h1>
        </div>
      </div>
    </div>
  );
}

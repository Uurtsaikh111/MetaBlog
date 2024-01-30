import React from "react";

export default function Trending(props) {
  
  const {data1} = props;
  return (
    <div >
      <div className="relative">
        <img src={data1.social_image} alt="" className="rounded-lg w-[289px] h-[320px] object-cover opacity-85" />
        <div className="w-[230px] gap-[16px] absolute left-[30px] bottom-[30px]">
        <h3 className=" w-[60px] px-[10px] py-[4px] rounded-md">{data1.type_of}</h3>
          <h1>{data1.title}</h1>
        </div>
      </div>
    </div>
  );
}
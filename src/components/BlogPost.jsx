import React from "react";

export default function BlogPost(props) {
  
  const {data2} = props;
  return (
    <div>
      <div className="flex gap-4 flex-col p-3 rounded-lg w-[360px] h-[444px]">
        <img src={data2.social_image} alt="" className="rounded-lg object-cover" />
        <div className="flex flex-col gap-[20px] items-start p-[8px]">
        <h5 className="flex justify-center items-center px-[10px] py-[4px] rounded-md">{data2.type_of}</h5>
        <h4>{data2.title}</h4>
        <p>{new Date(data2.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

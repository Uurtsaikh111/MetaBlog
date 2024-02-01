import React from "react";

export default function BlogPost(props) {
  const { data2 } = props;
  return (
    <div>
      <div className="flex gap-4 flex-col p-3 rounded-lg w-[390px] h-[444px]">
        <img
          src={data2.social_image}
          alt=""
          className="rounded-lg object-cover"
        />
        <div className="flex flex-col gap-[20px] items-start p-[8px]">
          <h5 className="flex justify-center items-center px-[10px] py-[4px] rounded-md">
            {data2.tag_list}
          </h5>
          <h4>{data2.title}</h4>
          <div className="flex gap-[20px]">
            <div className="flex justify-start items-center gap-3">
              <img
                className="w-9 h-9 rounded-[28px]"
                src={data2.user.profile_image_90}
              />
              <p className="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
                {data2.user.name}
              </p>
            </div>
            <p className="py-[5px]">
              {new Date(data2.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

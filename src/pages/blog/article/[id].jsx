import React from "react";
import parse from "html-react-parser";

export default function Page({ data }) {
  console.log("data12", data);

  return (
    <div className="w-[1920px] flex flex-col mt-[100px] mb-40">
      <div className="w-[900px] flex flex-col gap-8 m-auto">
        <div className="self-stretch text-gray-900 text-4xl font-semibold font-['Work Sans'] leading-7">
          {data.title}
        </div>
        <div className="justify-start items-center gap-8 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <img
              className="w-9 h-9 rounded-[28px]"
              src={data.user.profile_image_90}
            />
            <div className="text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">
              {data.user.name}
            </div>
          </div>
          <div className="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
            {new Date(data.created_at).toLocaleDateString()}
          </div>
        </div>
        <img className="w-full rounded-md" src={data.social_image} alt="" />

        <div>{parse(data.body_html)}</div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();
  console.log("data.id:", id);
  return {
    props: {
      data,
    },
  };
};

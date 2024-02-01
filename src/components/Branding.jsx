import React from "react";

export function Card({ title, img_url }) {
  return (
    <div className="border-2 rounded-xl h-[476px] w-[392px] shadow-md">
      <h3>{title}</h3>
      <img src={img_url} alt="" />
    </div>
  );
}

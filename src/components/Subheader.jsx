import React from "react";
import Link from "next/link";

export default function SubHeader() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="text-2xl text-[#181A2A] font-bold">All Blog Post</div>
      <div className="flex gap-[20px] text-[#495057] text-xs font-bold font-['Work Sans'] leading-[25px]">
        <Link href={"/blog"}>All</Link>
        <Link href={"/blog/design"}>Design</Link>
        <Link href={"/blog/travel"}>Travel</Link>
        <Link href={"/blog/fashion"}>Fashion</Link>
        <Link href={"/blog/technology"}>Technology</Link>
        <Link href={"/blog/branding"}>Branding</Link>
      </div>
    </div>
  );
}

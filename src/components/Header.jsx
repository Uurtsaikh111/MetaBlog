import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex gap-[30px]">
      hello
      <button onClick={() => router.push("/blog")}>Blog</button>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
}

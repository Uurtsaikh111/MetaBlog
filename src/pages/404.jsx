import Link from "next/link";
export default function Custom404() {
  return (
    <div className="w-[642px] flex m-auto gap-[40px] p-[100px] ">
      <p className=" text-7xl text-black py-[70px] ">404</p>
      <div className="border-r-2"></div>
      <div className=" flex flex-col gap-[20px] py-[8px]">
        <p className="font-semibold text-2xl text-black">Page Not Found</p>
        <p className="text-lg w-[360px]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href={"/"}>
          <div className="w-[126px] text-sm px-[16px] py-[10px] rounded-md bg-[#4B6BFB] text-white">
            Back To Home
          </div>
        </Link>
      </div>
    </div>
  );
}

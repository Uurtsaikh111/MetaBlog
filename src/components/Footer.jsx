import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterIcon from "./icons/FooterIcon";

export default function Footer() {
  return (
    <div className="w-[1367px] h-[495px]  px-[90px] pt-16 bg-neutral-100 border-t border-gray-200 flex-col justify-start items-start gap-[25px] inline-flex ">
      <div className="flex">
        <div className="w-[289px] h-[236px]  justify-start items-start gap-6 inline-flex">
          <div className="w-[280px] h-40 flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-gray-900 text-lg font-semibold font-['Plus Jakarta Sans'] leading-7">
              About
            </div>
            <div className="w-[280px] text-zinc-500 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
        </div>
        <div className="w-[521px] h-[88px] justify-center items-start gap-20 inline-flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-700 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Home
              </div>
              <div className="text-zinc-700 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Blog
              </div>
              <div className="text-zinc-700 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="w-36 h-4 flex gap-5">
          <FaFacebook className="fill-gray-500" />
          <FaTwitter className="fill-gray-500" />
          <FaInstagram className="fill-gray-500" />
          <FaLinkedin className="fill-gray-500" />
        </div>
      </div>
      <div className="w-[1126px] h-[95px] py-8 border-t border-zinc-200 justify-start items-center gap-16 inline-flex">
        <FooterIcon />
        <div className="w-[929px] h-6 justify-end items-center gap-4 inline-flex">
          <div className="text-zinc-700 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Terms of Use
          </div>
          
          <div className="text-zinc-700 text-base font-normal font-['Plus Jakarta Sans'] leading-normal border-l-2 pl-4">
            Privacy Policy
          </div>
          
          <div className="text-zinc-700 text-base font-normal font-['Plus Jakarta Sans'] leading-normal border-l-2 pl-4">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
}

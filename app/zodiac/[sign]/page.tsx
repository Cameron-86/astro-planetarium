"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const sign = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  // ftn1: call api with params.sign & date
  // ftn2: cliboard copy share (site url & home img)

  return (
    <div className="flex justify-center mt-40">
      <div className="flex flex-col gap-8 w-[344px] px-6 py-8 rounded-[20px] bg-gradient-to-bl from-white/5 via-white/10 to-white/5 overflow-hidden border border-white/30 backdrop-blur-[25px] text-[#f8f8fb]">
        <p className=" font-bold">dear. {params.sign}</p>
        <div className="flex flex-col items-center text-[#f8f8fb]">
          <p className="font-bold">'s fortune</p>
          <p className="text-sm">asdf</p>
        </div>
        <div className="flex flex-col items-center text-[#f8f8fb]">
          <p className="font-bold">lucky items</p>
          <p>O O O</p>
        </div>
        <div className="flex flex-col items-center text-[#f7f8fa] font-semibold">
          <button className="w-full px-5 py-3 bg-gradient-to-b from-[#f8f8fb]/10 via-[#f8f8fb]/25 to-[#f8f8fb]/10 rounded-2xl border border-[#f8f8fb]/60 mb-4">
            <Link href="./">go to home</Link>
          </button>
          <div
            onClick={() => {}}
            className="py-1 flex border-b border-[#f8f8fb]/60"
          >
            <p className="text-xs">Share</p>
            <img src="/icons/share.svg" alt="shareIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default sign;

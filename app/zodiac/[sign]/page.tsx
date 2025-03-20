"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const sign = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  // ftn1: call api with params.sign & date

  const copyUrl = async () => {
    const text = "site_url.com";

    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었습니다.");
    } catch (error) {
      alert("링크 복사에 실패하였습니다.");
    }
  };

  return (
    <div className="flex justify-center mt-40">
      <div className="flex flex-col gap-8 w-[344px] px-6 py-8 rounded-[20px] bg-gradient-to-bl from-[rgba(255,255,255,0.05)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] overflow-hidden border border-[rgba(255,255,255,0.3)] backdrop-blur-[25px] text-[#f8f8fb]">
        <p className=" font-bold">dear. {params.sign}</p>
        <div className="flex flex-col items-center text-[#f8f8fb]">
          <p className="font-bold">T{date?.slice(1)}'s fortune</p>
          <p className="text-sm">asdf</p>
        </div>
        <div className="flex flex-col items-center text-[#f8f8fb]">
          <p className="font-bold">Lucky items</p>
          <p>O O O</p>
        </div>
        <div className="flex flex-col items-center text-[#f7f8fa] font-semibold">
          <button className="w-full px-5 py-3 bg-gradient-to-b from-[#f8f8fb]/10 via-[#f8f8fb]/25 to-[#f8f8fb]/10 rounded-2xl border border-[rgba(248,248,251,0.6)] mb-4">
            <Link href="./">go to home</Link>
          </button>
          <div
            onClick={() => copyUrl()}
            className="py-1 flex border-b border-[rgba(248,248,251,0.6)] cursor-pointer"
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

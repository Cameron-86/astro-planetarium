"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sign = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [data, setData] = useState<string | undefined>();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  // day: "TODAY" OR "TOMORROW" OR "YESTERDAY"
  // Co: monthly, weekly (use Only sign)

  const signFormatted =
    (params.sign as string).charAt(0).toUpperCase() +
    (params.sign as string).slice(1).toLowerCase();

  const dayFormatted = date?.toUpperCase();

  const fetchHoroscope = async () => {
    setLoading(true); // 로딩 시작
    const res = await fetch(
      `/api/horoscope?sign=${signFormatted}&day=${dayFormatted}`
    );
    const json = await res.json();
    setData(json.data.horoscope_data);
    setLoading(false); // 로딩 끝
  };

  useEffect(() => {
    fetchHoroscope();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-40">
      <div className="flex flex-col gap-8 w-[344px] px-6 py-8 rounded-[20px] bg-gradient-to-bl from-[rgba(255,255,255,0.05)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] overflow-hidden border border-[rgba(255,255,255,0.3)] backdrop-blur-[25px] text-[#f8f8fb]">
        <p className=" font-bold">dear. {signFormatted}</p>
        <div className="flex flex-col items-center text-center text-[#f8f8fb]">
          <p className="font-bold mb-2">T{date?.slice(1)}'s fortune</p>
          <p className="text-sm">{data}</p>
        </div>
        <div className="flex flex-col items-center text-[#f7f8fa] font-semibold">
          <button className="w-full px-5 py-3 bg-gradient-to-b from-[#f8f8fb]/10 via-[#f8f8fb]/25 to-[#f8f8fb]/10 rounded-2xl border border-[rgba(248,248,251,0.6)] mb-4">
            <Link href="./">go to home</Link>
          </button>
          <div
            onClick={() => {
              navigator.clipboard
                .writeText("https://astro-planetarium.vercel.app/")
                .then(() => alert("링크가 복사되었습니다."))
                .catch(() => alert("링크 복사에 실패하였습니다."));
            }}
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

export default Sign;

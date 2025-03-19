"use client";

import Link from "next/link";
import React, { useState } from "react";

const Zodiac = () => {
  const [activeOption, setActiveOption] = useState("today");

  const zodiacSigns = [
    "aquarius",
    "pisces",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorne",
  ];

  return (
    <div className="flex flex-col mx-auto mt-44 w-[344px]">
      <div className="flex justify-end cursor-pointer mb-8 text-xs font-semibold ">
        <div className="flex gap-4 w-fit border-b-1 border-[rgba(247,248,250,0.6)]">
          {["today", "tomorrow"].map((category) => (
            <div
              key={category}
              onClick={() => setActiveOption(category)}
              className={`pb-2 ${
                activeOption === category
                  ? "text-[#f7f8fa] border-b-1"
                  : "text-[#CCCCCC]"
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 space-y-8 w-full">
        {zodiacSigns.map((zodiac) => (
          <Link
            key={zodiac}
            href={`./`}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={`/zodiac/${zodiac}.svg`}
              alt="libra"
              className="w-[72px] h-[72px] mb-1"
            />
            <p className="text-[#f8f8fb] text-sm font-medium">{zodiac}</p>
          </Link>
        ))}
      </div>

      {/* <button>
        <Link href="./findZodiac">내 별자리 찾기</Link>
      </button> */}
    </div>
  );
};

export default Zodiac;

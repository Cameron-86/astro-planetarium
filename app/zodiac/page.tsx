import Link from "next/link";
import React from "react";

const Zodiac = () => {
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
    <div>
      <div className="flex cursor-pointer gap-4 mb-4">
        {["today", "tomorrow"].map((category) => (
          <div
            key={category}
            className="w-3xs p-4 text-center bg-gray-300 rounded-lg"
          >
            {category}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {zodiacSigns.map((zodiac) => (
          <div
            key={zodiac}
            className="p-4 text-center bg-gray-200 rounded-lg cursor-pointer"
          >
            <img
              src={`/${zodiac}.svg`}
              alt="libra"
              className="bg-black w-[72px] h-[72px]"
            />
            {zodiac}
          </div>
        ))}
      </div>

      {/* <button>
        <Link href="./findZodiac">내 별자리 찾기</Link>
      </button> */}
    </div>
  );
};

export default Zodiac;

import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-3">
        <button className=" cursor-pointer text-[#f7f8fa] font-semibold px-5 py-3 bg-gradient-to-b from-[#f8f8fb]/10 via-[#f8f8fb]/25 to-[#f8f8fb]/10 rounded-2xl outline outline-offset-[-1px] outline-[#f8f8fb]/60 flex justify-center items-center gap-2.5">
          <Link href="./zodiac">What’s your zodiac 🔮</Link>
        </button>
        {/* <button>
          <Link
            href="./findZodiac"
            className="text-[#f7f8fa] text-xs font-semibold border-b border-[#f8f8fb]/60 py-1"
          >
            내 별자리 찾기
          </Link>
        </button> */}
      </div>
    </div>
  );
};

export default Home;

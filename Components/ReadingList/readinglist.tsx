"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Readinglist = () => {
  const router = useRouter();
  const button = [
    { id: 1, name: "E-Books", href: "/pages/Ebooks" },
    { id: 2, name: "Audio books", href: "/pages/AudioBooks" },
    { id: 3, name: "Video books", href: "/pages/VideoBooks" },
  ];

  return (
    <div>
      <div className="text-[32px] font-medium md:mt-6 lg:mx-24 md:block hidden">
        Reading List
      </div>
      <div className="flex items-center justify-center md:items-start md:justify-start lg:mx-24 gap-6">
        <div
          onClick={() => router.push("/pages/Ebooks")}
          className="flex items-center justify-center font-medium w-[83px] h-[31px] md:w-[104px] md:h-[31px] md:mt-6 mt-2 border-2 rounded-lg text-center  md:text-[16px] text-[12px] hover:bg-gray-200 cursor-pointer"
        >
          E-Books
        </div>
        <div
          onClick={() => router.push("/pages/AudioBooks")}
          className="flex items-center justify-center font-medium w-[83px] h-[31px] md:w-[104px] md:h-[31px] md:mt-6 mt-2 border-2 rounded-lg text-center  md:text-[16px] text-[12px] hover:bg-gray-200 cursor-pointer"
        >
          Audio Books
        </div>
        <div
          onClick={() => router.push("/pages/VideoBooks")}
          className="flex items-center justify-center font-medium w-[83px] h-[31px] md:w-[104px] md:h-[31px] md:mt-6 mt-2 border-2 rounded-lg text-center  md:text-[16px] text-[12px] hover:bg-gray-200 cursor-pointer"
        >
         Video books
        </div>
      </div>
    </div>
  );
};

export default Readinglist;

"use client";
import React from "react";
import { useRouter } from "next/navigation";

const EBookmanagement = () => {
  const router = useRouter();
  const buttons = [
    {
      label: "Pending",
      route: "/pages/ebooksmanagement/ebookspending",
    },
    {
      label: "Approved",
      route: "/pages/ebooksmanagement/ebooksapproved",
    },
    {
      label: "Rejected",
      route: "/pages/ebooksmanagement/ebooksrejected",
    },
  ];

  return (
    <div>
      <div className="text-[24px] font-semibold">Book Management</div>
      <div className="flex items-center justify-start gap-4 mt-4">
        {buttons.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.route)}
            className="w-[88px] h-[42px] text-[14px] font-medium text-[#181818] bg-[#FBFBFB] hover:bg-[#1818181A] rounded-md"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EBookmanagement;

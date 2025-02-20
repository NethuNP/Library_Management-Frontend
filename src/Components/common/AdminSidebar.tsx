"use client";
import React, { useState } from "react";
import { MdOutlineDashboard, MdKeyboardArrowDown } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";

const AdminSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const userManageItems = [
    { name: "Reader", route: "/pages/ReaderPending" },
    { name: "Publisher", route: "/pages/Publishers" },
  ];
  const bookManageItems = [
    { name: "Ebooks", route: "/pages/ebooksmanagement/ebookspending" },
    { name: "Audio Books", route: "/pages/audiobooksmanagement/audiobookspending" },
    { name: "Video Books", route: "/pages/videobooksmanagement/videobookspending" },
  ];

  return (
    <div className="w-1/4 h-screen bg-[#FBFBFB]">
      <div className="mx-10">
        <div className="text-[20px] font-bold mt-14">BookScape</div>

        <div
          className="flex items-center justify-between gap-3 mt-14 cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <div className="flex items-center gap-3 w-[280px] h-[40px]">
            <MdOutlineDashboard className="w-6 h-6 text-gray-600" />
            <span className="text-[16px] font-semibold">Dashboard</span>
          </div>
        </div>

        <div
          className="flex items-center justify-between gap-3 mt-8 cursor-pointer"
          onClick={() => setIsUserOpen(!isUserOpen)}
        >
          <div className="flex items-center gap-3 w-[280px] h-[40px]">
            <TbLayoutDashboard className="w-6 h-6 text-gray-600" />
            <span className="text-[16px] font-semibold">User Management</span>
          </div>
          <MdKeyboardArrowDown
            className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
              isUserOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isUserOpen && (
          <div className="ml-9 mt-2 space-y-2">
            {userManageItems.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.route)}
                className="flex items-center px-4 text-[14px] cursor-pointer hover:bg-[#0D47A1] rounded-lg hover:text-[#FBFBFB] w-[280px] h-[40px]"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        <div
          className="flex items-center justify-between gap-3 mt-8 cursor-pointer"
          onClick={() => setIsBookOpen(!isBookOpen)}
        >
          <div className="flex items-center gap-3 w-[280px] h-[40px]">
            <FaBook className="w-6 h-6 text-gray-600" />
            <span className="text-[16px] font-semibold">Book Management</span>
          </div>
          <MdKeyboardArrowDown
            className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
              isBookOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isBookOpen && (
          <div className="ml-9 mt-2 space-y-2">
            {bookManageItems.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.route)}
                className="flex items-center px-4 text-[14px] cursor-pointer hover:bg-[#0D47A1] rounded-lg hover:text-[#FBFBFB] w-[280px] h-[40px]"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="flex items-center justify-between gap-3 mt-8 cursor-pointer mx-10"
        onClick={() => router.push("/settings")}
      >
        <div className="flex items-center gap-3 w-[280px] h-[40px] bg-[#FFFFFF] rounded-lg">
          <CiSettings className="w-6 h-6 text-gray-600" />
          <span className="text-[16px] font-semibold">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

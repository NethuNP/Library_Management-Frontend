import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

const AdminHeader = () => {
  return (
    <div className="w-full h-[92px] bg-[#FBFBFB] flex items-center justify-center px-10">
      <div className="relative flex items-center w-[60%]">
        <CiSearch className="absolute left-4 w-[24px] h-[24px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[44px] pl-12 pr-4 rounded-md text-[16px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <MdOutlineLogout className="w-[24px] h-[24px] text-gray-500 cursor-pointer ml-10" />
    </div>
  );
};

export default AdminHeader;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { CiHeart, CiSettings, CiSearch } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropdown = [
    {
      id: "1",
      name: "Reading List",
      route: "/pages/Ebooks",
      icon: <CiHeart className="w-5 h-5 mr-2" />,
    },
    {
      id: "2",
      name: "Your Accounts",
      route: "/",
      icon: <CiSettings className="w-5 h-5 mr-2" />,
    },
    {
      id: "3",
      name: "Sign out",
      route: "/",
      icon: <MdOutlineLogout className="w-5 h-5 mr-2" />,
    },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <div className="relative flex items-center justify-between md:h-[80px] h-[48px] bg-[#FBFBFB] lg:px-24">
      <button
        className="absolute top-4 right-16 text-2xl cursor-pointer md:hidden block"
        onClick={toggleSearch}
      >
        <CiSearch />
      </button>

      <button
        className="lg:hidden absolute top-4 right-4 text-2xl cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaBarsStaggered />
      </button>

      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <Link href="/" className="md:text-[24px] text-[16px] font-bold lg:static absolute top-4 left-4 cursor-pointer">
        BookScape
      </Link>

      {searchOpen && (
        <div className="w-full h-[20px] md:hidden mt-20">
          <input
            type="text"
            placeholder=" Search"
            className="w-full h-[36px] border rounded-md"
          />
          <button className="text-gray-500 hover:text-gray-700" onClick={toggleSearch}></button>
        </div>
      )}

      <div className="w-[519px] h-[44px] lg:flex hidden border-2 text-gray-400 text-center items-center justify-center rounded-md">
        Search
      </div>

      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black px-4 py-2 bg-[#FBFBFB] rounded-md">
          Resources ▼
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md">
            <ul className="py-2 text-gray-800">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/pages/AboutUs">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/pages/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="relative lg:flex hidden items-center gap-4">
        <button className="text-white px-4 py-2 bg-[#0D47A1] rounded-md">
          Switch to Publisher
        </button>

        <div className="relative">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center" onClick={toggleDropdown}>
            <Image src="/Icons/user.png" alt="user" width={24} height={24} />
          </div>

          {dropdownOpen && (
            <div className="absolute top-12 mt-2 w-[200px] bg-white shadow-md rounded-md border p-2">
              <div className="font-semibold text-gray-800 mb-2">Hello Alex!</div>
              {dropdown.map((item) => (
                <Link key={item.id} href={item.route}>
                  <div className="flex items-center gap-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600 cursor-pointer">
                    {item.icon}
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="items-center gap-4 lg:flex hidden">
        <Link href="/login">
          <button className="text-black w-[123px] h-[48px] bg-[#FBFBFB] border rounded-md">Sign in</button>
        </Link>
        <Link href="/pages/register">
          <button className="text-white w-[123px] h-[48px] bg-[#0D47A1] rounded-md mx-4">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
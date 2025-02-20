"use client";
import React from "react";
import Link from "next/link";

const categories = [
  { name: "Fiction", route: "/" },
  { name: "Non-Fiction", route: "/non-fiction" },
  { name: "Educational", route: "/educational" },
  { name: "Children’s Books", route: "/childrens-books" },
  { name: "Special Interest", route: "/special-interest" },
  { name: "Other", route: "/other" },
];

const CategoryBar = () => {
  return (
    <div className="bg-white py-3 rounded-md lg:block hidden">
      <div className="flex items-center justify-center gap-6 text-[16px] font-medium">
        {categories.map((category, index) => (
          <Link key={index} href={category.route}>
            <div className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-colors duration-300">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;

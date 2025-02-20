"use client";
import React, { useState } from "react";

const categories = [
  { name: "Fiction", route: "/" },
  { name: "Non-Fiction", route: "/non-fiction" },
  { name: "Educational", route: "/educational" },
  { name: "Children’s Books", route: "/childrens-books" },
  { name: "Special Interest", route: "/special-interest" },
  { name: "Other", route: "/other" },
];

interface CategoryBarProps {
  onSelectCategory: (category: string) => void;
}

const CategoryBar = ({ onSelectCategory }: CategoryBarProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Fiction");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Notify parent component
  };

  return (
    <div className="bg-white py-3 rounded-md lg:block hidden">
      <div className="flex items-center justify-center gap-6 text-[16px] font-medium">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-colors duration-300 ${
              selectedCategory === category.name ? "text-blue-500" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
"use client";
import React, { useState } from "react";
import Header from "@/Components/common/Header";
import BookDisplay from "@/Components/BeforRegister/CategoryPage/BookDisplay";
import Footer from "@/Components/common/Footer";
import CategoryBar from "@/Components/BeforRegister/CategoryPage/CategoryBar";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const router =useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Fiction");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Function to get the heading and statement based on the selected category
  const getCategoryDetails = (category: string) => {
    switch (category) {
      case "Fiction":
        return {
          heading: "Fiction Books",
          statement: "Escape into Endless Stories & Imaginations!",
        };
      case "Non-Fiction":
        return {
          heading: "Non-Fiction Books",
          statement: "Explore Real Stories & Facts!",
        };
      case "Educational":
        return {
          heading: "Educational Books",
          statement: "Learn Something New Every Day!",
        };
      case "Children’s Books":
        return {
          heading: "Children’s Books",
          statement: "Fun and Learning for Young Minds!",
        };
      case "Special Interest":
        return {
          heading: "Special Interest Books",
          statement: "Dive Deep into Your Passions!",
        };
      case "Other":
        return {
          heading: "Other Books",
          statement: "Discover a World of Possibilities!",
        };
      default:
        return {
          heading: "Books",
          statement: "Explore Our Collection!",
        };
    }
  };

  const { heading, statement } = getCategoryDetails(selectedCategory);

  return (
    <div>
      <Header />
      <CategoryBar onSelectCategory={handleCategorySelect} />
      <div className="bg-white text-black p-6">
        <h1 className="text-2xl font-bold text-black text-center">{heading}</h1>
        <p className="text-lg text-gray-600 text-center mt-2">{statement}</p>
        <BookDisplay category={selectedCategory} />

        {/* Additional Content */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700">
            Loved these books? There's so much more!
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Our Library, Unlimited & Unlocked
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => router.push("/pages/register")}>
            Become a Member
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
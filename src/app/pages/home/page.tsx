"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil, Plus } from "lucide-react"; 
import user from "@/Components/image/user.png"; 
import book1 from "@/Components/image/book.jpeg";
import book2 from "@/Components/image/book2.jpeg";
import book3 from "@/Components/image/book3.jpeg";
import book4 from "@/Components/image/book4.jpeg";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("E-Books");

  const books = [
    { id: 1, title: "Tales under a Purple Sky", author: "Samira Hadid", cover: book1 },
    { id: 2, title: "Tales under a Purple Sky", author: "Samira Hadid", cover: book2 },
    { id: 3, title: "Tales under a Purple Sky", author: "Samira Hadid", cover: book3 },
    { id: 4, title: "Tales under a Purple Sky", author: "Samira Hadid", cover: book4 }
  ];

  return (
    <div className="flex gap-10 p-10">
      {/* Profile Section */}
      <div className="w-1/3 p-6 border rounded-lg shadow-sm">
        <div className="relative flex flex-col items-center">
          <Image src={user} alt="Profile" width={100} height={100} className="rounded-full" />
          <button className="absolute top-2 right-2 flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-600 rounded-md">
            <Pencil size={14} /> Edit Profile
          </button>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold">Alex Benjamin</h2>
          <p className="text-gray-500">alexbenjamin.com</p>
        </div>
        <p className="mt-3 text-sm text-gray-600 text-center">
          Dedicated to sharing unique voices with the world, we publish stories that inspire, educate, and entertain readers of all genres.
        </p>
        <div className="flex justify-center mt-4">
          <span className="px-3 py-1 text-sm bg-yellow-400 rounded-md">📚 12 Books Published</span>
        </div>
      </div>

      {/* Books Section */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Published Books</h2>

        {/* Tab Buttons */}
        <div className="flex gap-3 mt-4">
          {["E-Books", "Audio Books", "Video Books"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border rounded-md ${
                activeTab === tab ? "bg-gray-900 text-white" : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="ml-[500px] bottom-10 relative">
          <button className="flex items-end gap-2 px-4 py-2 text-white bg-blue-600 rounded-md">
            <Plus size={16} /> Publish a Book
          </button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          {books.map((book) => (
            <div key={book.id} className="p-4 border rounded-lg shadow-md">
              <Image src={book.cover} alt={book.title} width={150} height={200} className="rounded-lg" />
              <h3 className="mt-2 text-sm font-semibold">{book.title}</h3>
              <p className="text-xs text-gray-600">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

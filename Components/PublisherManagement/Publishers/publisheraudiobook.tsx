"use client";
import React, { useState } from "react";
import audiobook from "@/Components/AudioBooks/audiobook";
import Image from "next/image";
import BookDetailModal from "./bookdetailModel";

const Publishervideobook = () => {
  const [selectedAudioBook, setSelectedAudioBook] = useState<any | null>(null);

  const handleBookClick = (book: any) => {
    setSelectedAudioBook(book);
  };

  const handleCloseModal = () => {
    setSelectedAudioBook(null);
  };

  return (
    <div>
      <div className="grid grid-cols-5 mt-2 gap-4">
        {audiobook.map((item) => (
          <div
            key={item.id}
            className="w-full h-full shadow-lg rounded-lg px-4 bg-white mt-4 cursor-pointer"
            onClick={() => handleBookClick(item)}
          >
            <div className="flex items-center justify-center mt-4">
              <Image
                src={item.image}
                alt={item.name}
                className="rounded-md object-cover w-full h-full"
                width={300}
                height={200}
              />
            </div>
            <div className="text-[16px] font-medium mt-4 text-start">
              {item.name}
            </div>
            <div className="text-gray-600 text-start text-[14px]">
              {item.author}
            </div>
          </div>
        ))}
      </div>

      {selectedAudioBook && (
        <BookDetailModal book={selectedAudioBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Publishervideobook;

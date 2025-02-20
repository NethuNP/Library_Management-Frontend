import React from "react";
import Image from "next/image";
import cover from "../../../../public/Images/BookCover.png";

const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[1280px] h-[864px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-lg hover:text-gray-900"
        >
          ✖
        </button>
        <div className="text-[24px] font-semibold">View Book</div>
        <div className="grid grid-cols-3 mt-4 gap-4">
          <div className="text-[16px] font-semibold">
            Cover Image
            <Image
              src={cover}
              alt={book.name}
              width={318}
              height={423}
              className="rounded-md mt-4"
            />
          </div>
          <div>
            <div className="text-[16px] font-semibold">
              Book ID
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Author
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Genre/ Category
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Published Date
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
          </div>
          <div>
            <div className="text-[16px] font-semibold">
              Title
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Format
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Language
              <input
                type="text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
              />
            </div>
          </div>
          <div className="col-span-2 col-start-2 -mt-32 text-[16px] font-semibold">
            Summary
            <input
              type="text"
              className="border border-gray-300 rounded-md px-2 py-1 w-full h-[108px] mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;

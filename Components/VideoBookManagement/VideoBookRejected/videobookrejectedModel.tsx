import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/app/utils/apiConfig";

interface VideoBookrejectedModelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBook: any | null;
}

const VideoBookrejectedModel: React.FC<VideoBookrejectedModelProps> = ({
  isOpen,
  onClose,
  selectedBook,
}) => {
  if (!isOpen || !selectedBook) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[1280px] h-[864px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-lg hover:text-gray-900"
        >
          ✖
        </button>
        <div className="text-[24px] font-semibold">Rejected Book Details</div>
        <div className="grid grid-cols-3 mt-4 gap-4">
          {/* Cover Image */}
          <div className="text-[16px] font-semibold">
            Cover Image
            {selectedBook.coverImage ? (
              <Image
                src={`${BASE_URL}/${selectedBook.coverImage}`}
                alt={selectedBook.title || "Book cover"}
                width={318}
                height={423}
                className="rounded-md mt-4"
              />
            ) : (
              <p className="mt-4 text-gray-500">No cover image available</p>
            )}
          </div>

          {/* Left Column */}
          <div>
            <div className="text-[16px] font-semibold">
              Book ID
              <input
                type="text"
                value={selectedBook.book_id}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Author
              <input
                type="text"
                value={selectedBook.author}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Genre/ Category
              <input
                type="text"
                value={selectedBook.genre}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Published Date
              <input
                type="text"
                value={new Date(selectedBook.createdAt).toLocaleDateString()}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="text-[16px] font-semibold">
              Title
              <input
                type="text"
                value={selectedBook.title}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Format
              <input
                type="text"
                value={selectedBook.format}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
            <div className="mt-6 text-[16px] font-semibold">
              Language
              <input
                type="text"
                value={selectedBook.language}
                className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2"
                readOnly
              />
            </div>
          </div>

          {/* Summary */}
          <div className="col-span-2 col-start-2 -mt-48 text-[16px] font-semibold">
            Summary
            <textarea
              value={selectedBook.summary}
              className="border border-gray-300 rounded-md px-2 py-1 w-full h-[108px] mt-2"
              readOnly
            />
          </div>
        </div>

        {/* Done Button */}
        <div className="flex items-end justify-end mt-20 gap-4">
          <button
            onClick={onClose}
            className="bg-[#0D47A1] text-white px-4 py-2 w-[111px] h-[48px] rounded-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBookrejectedModel;

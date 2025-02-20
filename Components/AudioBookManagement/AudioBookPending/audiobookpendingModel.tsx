import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/app/utils/apiConfig";

interface AudioBookpendingModelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBook: any | null;
  handleApprove: (id: string) => Promise<void>;
  handleReject: (id: string) => Promise<void>;
}

const AudioBookpendingModel: React.FC<AudioBookpendingModelProps> = ({
  isOpen,
  onClose,
  selectedBook,
  handleApprove,
  handleReject,
}) => {
  if (!isOpen || !selectedBook) return null;

  const approveAndClose = async (id: string) => {
    try {
      await handleApprove(id);

      onClose();
    } catch (error) {
      console.error("Error approving book", error);
    }
  };

  const rejectAndClose = async (id: string) => {
    try {
      await handleReject(id);

      onClose();
    } catch (error) {
      console.error("Error rejecting book", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 text-[#181818]">
      <div className="bg-white p-6 rounded-md w-[1280px] h-[750px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-lg hover:text-gray-900"
        >
          ✖
        </button>
        <div className="text-[24px] font-semibold">Review Book</div>
        <div className="grid grid-cols-3 mt-4 gap-4">
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
          <div className="col-span-2 col-start-2 -mt-48 text-[16px] font-semibold">
            Summary
            <textarea
              value={selectedBook.summary}
              className="border border-gray-300 rounded-md px-2 py-1 w-full h-[108px] mt-2"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-end justify-end mt-10 gap-4">
          <button
            onClick={() => rejectAndClose(selectedBook._id)}
            className="bg-[#91000052] border border-[#910000] text-[#910000] w-[120px] h-[49px] px-4 py-2 rounded-md"
          >
            Reject
          </button>
          <button
            onClick={() => approveAndClose(selectedBook._id)}
            className="bg-[#00692C] text-white px-4 py-2 w-[141px] h-[49px] rounded-md"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioBookpendingModel;

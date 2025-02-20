"use client";
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import VideoBookrejectedModel from "./videobookrejectedModel";
import { useGetBooksQuery } from "@/app/Redux/features/bookSlice";
import { Book } from "@/types/types";

interface ResponseData {
  books: Book[];
  total: number;
}

const VideoBookrejected = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any | null>(null);

  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetBooksQuery<{
    data: ResponseData | undefined;
    isLoading: boolean;
    isError: boolean;
  }>();

  // Filter books that are Rejected
  const rejectedBooks =
    responseData?.books.filter(
      (book) => book.status === "Rejected" && book.format === "Video"
    ) ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(rejectedBooks.length / rowsPerPage);

  const openModal = (book: any) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentBooks = rejectedBooks.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="mt-6 w-full text-[#181818]">
        <thead className="bg-[#1818180D] border border-[#1818180D] border-opacity-[20%] bg-opacity-[5%] text-[#181818]">
          <tr>
            <th className="w-[100px] h-[60px] text-[14px] font-medium">ID</th>
            <th className="w-[220px] h-[60px] text-[14px] font-medium">
              Title
            </th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">
              Author
            </th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">
              Format
            </th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">
              Rejected Date
            </th>
            <th className="w-[217px] h-[60px] text-[14px] font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book, index) => (
            <tr
              key={index}
              className="bg-[#FBFBFB] border-[#1818180D] border-b border-opacity-[20%]"
            >
              <td className="w-[100px] h-[60px] text-[14px] font-medium text-center">
                {book.book_id}
              </td>
              <td className="w-[220px] h-[60px] text-[14px] font-medium text-center">
                {book.title}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {book.author}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {book.format}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {new Date(book.createdAt).toLocaleDateString()}
              </td>
              <td className="w-[217px] h-[60px] text-[14px] font-medium text-center">
                <div className="flex justify-center gap-4">
                  <button>
                    <IoMdEye
                      className="w-[24px] h-[24px] text-[#0D47A1]"
                      onClick={() => openModal(book)}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <VideoBookrejectedModel
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedBook={selectedBook}
      />

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[88px] h-[42px] text-[14px] font-medium text-[#181818] bg-[#FBFBFB] hover:bg-[#1818181A] rounded-md"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[88px] h-[42px] text-[14px] font-medium text-[#181818] bg-[#FBFBFB] hover:bg-[#1818181A] rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoBookrejected;

"use client";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import AudioBookpendingModel from "./audiobookpendingModel";
import Swal from "sweetalert2";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
  useApproveBookMutation,
  useRejectBookMutation,
} from "@/app/Redux/features/bookSlice";
import { Book } from "@/types/types";

interface ResponseData {
  books: Book[];
  total: number;
}

const AudioBookpending = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Fetch books data
  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetBooksQuery<{
    data: ResponseData | undefined;
    isLoading: boolean;
    isError: boolean;
  }>();

  const books =
    responseData?.books.filter(
      (book) => book.status === "Pending" && book.format === "Audio"
    ) ?? [];

  const [deleteBook, { isLoading: deleteLoading }] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(id);
        Swal.fire("Deleted!", "The book has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", "There was an error deleting the book.", "error");
      }
    }
  };

  const [approveBook, { isLoading: approveLoading }] = useApproveBookMutation();

  const handleApprove = async (id: string) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to Approve this book?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Approve it!",
        cancelButtonText: "No, cancel!",
      });
      await approveBook(id);
      await Swal.fire("Approved!", "The book has been Approved.", "success");
    } catch (error) {
      await Swal.fire(
        "Error!",
        "There was an error Approving the book.",
        "error"
      );
    }
  };

  const [rejectedBooks, { isLoading: rejectLoading }] = useRejectBookMutation();
  const handleReject = async (id: string) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to Reject this book?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Reject it!",
        cancelButtonText: "No, cancel!",
      });
      await rejectedBooks(id);
      await Swal.fire("Rejected!", "The book has been Rejected.", "success");
    } catch (error) {
      await Swal.fire(
        "Error!",
        "There was an error Rejecting the book.",
        "error"
      );
    }
  };

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading books...</p>
      ) : isError ? (
        <p>Error loading books.</p>
      ) : books.length === 0 ? (
        <p>No books found.</p>
      ) : (
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
                Submitted Date
              </th>
              <th className="w-[217px] h-[60px] text-[14px] font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book.book_id}
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
                    <button
                      className="text-white"
                      onClick={() => handleDelete(book._id.toString())}
                    >
                      <RiDeleteBin6Line className="w-[24px] h-[24px] text-[#910000]" />
                    </button>
                    <button
                      className="w-[146px] h-[36px] bg-[#00692C] text-white rounded-md flex items-center justify-center gap-2 px-2"
                      onClick={() => openModal(book)}
                    >
                      <IoMdEye className="w-[14px] h-[14px]" />
                      Review Book
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <AudioBookpendingModel
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedBook={selectedBook}
        handleApprove={handleApprove}
        handleReject={handleReject}
      />
    </div>
  );
};

export default AudioBookpending;

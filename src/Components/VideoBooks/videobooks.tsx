"use client";
import React, { useState } from "react";
import vediobook from "./videobook";
import Image from "next/image";
import Readinglist from "../ReadingList/readinglist";
import CategoryBar from "../common/CategoryBar";
import FavoriteHeart from "../common/Favourite";
import { useGetBooksQuery } from "@/app/Redux/features/bookSlice";
import { Book } from "@/types/types";
import { BASE_URL } from "@/app/utils/apiConfig";

interface ResponseData {
  books: Book[];
  total: number;
}

const videobooks = () => {
  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetBooksQuery<{
    data: ResponseData | undefined;
    isLoading: boolean;
    isError: boolean;
  }>();
  const vediobook =
    responseData?.books.filter(
      (book) => book.format === "Video" && book.status === "Approved"
    ) ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(vediobook.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentVediobook = vediobook.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#FBFBFB]">
      <CategoryBar />
      <div>
        <Readinglist />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2  md:gap-4 gap-2 lg:mx-24 md:mx-6 mx-2 bg-[#FBFBFB]">
        {currentVediobook.map((book, index) => (
          <div
            key={index}
            className="md:w-full md:h-full lg:w-[302px] lg:h-full w-full h-full shadow-lg rounded-lg px-4  bg-white mt-6 "
          >
            <div className="flex items-center justify-center mt-4">
              <Image
                src={`${BASE_URL}/${book.coverImage}`}
                width={100}
                height={100}
                alt={book.title}
                className="rounded-md object-cover w-full h-full"
              />
            </div>
            <div className="flex md:gap-6 gap-6 items-center md:mt-4">
              <div className="md:text-[16px] text-[10px] font-medium  text-start">
                {book.title}
              </div>
              <div>
                {" "}
                <FavoriteHeart />
              </div>
            </div>
            <div className="text-gray-600 text-start text-[8px] md:text-[14px]">
              {book.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default videobooks;

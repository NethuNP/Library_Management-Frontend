"use client";
import React, { useState } from "react";
import FavoriteHeart from "../common/Favourite";
import Image from "next/image";
import Readinglist from "../ReadingList/readinglist";
import CategoryBar from "../common/CategoryBar";
import { useGetBooksQuery } from "@/app/Redux/features/bookSlice";
import { Book } from "@/types/types";
import { BASE_URL } from "@/app/utils/apiConfig";


interface ResponseData {
  books: Book[];
  total: number;
}

const Ebooks = () => {
  const {
    data:responseData,
    isLoading,
    isError,
  } = useGetBooksQuery<{
      data: ResponseData | undefined;
      isLoading: boolean;
      isError: boolean;
    }>();

  const ebook = responseData?.books.filter((book) => book.format === "Ebook" && book.status === "Approved") ?? [];
  
  //Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(ebook.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentEbooks = ebook.slice(indexOfFirstRow, indexOfLastRow);

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
        {currentEbooks.map((book,index) => (
          <div
            key={index}
            className="md:w-full md:h-full lg:w-[302px] lg:h-full w-full h-full shadow-lg rounded-lg px-4  bg-white mt-6  "
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
            <div className="md:text-[16px] text-[10px] font-medium mt-4 text-start ">
              {book.title}
            </div>
            <div className="text-gray-600 text-start text-[8px] md:text-[14px]">
              {book.author}
            </div>

            <div className="flex gap-4 items-center justify-center">
              <button className="md:w-full md:h-[39px] w-full h-[18px] text-[8px] md:text-[16px] text-white bg-[#0D47A1] rounded-md">
                Continue Reading
              </button>

              <FavoriteHeart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;

"use client";
import React, { useState } from "react";
import readers from "../readermanagements";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import ReaderpendingModel from "./readerpendingModel";

const Readerpending = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReader, setSelectedReader] = useState<Reader | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const totalPages = Math.ceil(readers.length / rowsPerPage);

  const openModal = (reader: Reader) => {
    setSelectedReader(reader);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReader(null);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentReaders = readers.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <table className="mt-6 w-full">
        <thead className="bg-[#1818180D] border border-[#1818180D] border-opacity-[20%] bg-opacity-[5%] text-[#181818]">
          <tr>
            <th className="w-[100px] h-[60px] text-[14px] font-medium">
              UserID
            </th>
            <th className="w-[220px] h-[60px] text-[14px] font-medium">Name</th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">
              Email
            </th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">
              Phone
            </th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">Date</th>
            <th className="w-[217px] h-[60px] text-[14px] font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentReaders.map((reader, index) => (
            <tr
              key={index}
              className="bg-[#FBFBFB] border-[#1818180D] border-b border-opacity-[20%]"
            >
              <td className="w-[100px] h-[60px] text-[14px] font-medium text-center">
                {reader.id}
              </td>
              <td className="w-[220px] h-[60px] text-[14px] font-medium text-center">
                {reader.name}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {reader.email}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {reader.contact}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {reader.date}
              </td>
              <td className="w-[217px] h-[60px] text-[14px] font-medium text-center">
                <div className="flex justify-center gap-4">
                  <button className="text-white">
                    <RiDeleteBin6Line className="w-[24px] h-[24px] text-[#910000]" />
                  </button>
                  <button
                    className="w-[146px] h-[36px] bg-[#00692C] text-white rounded-md flex items-center justify-center gap-2 px-2"
                    onClick={() => openModal(reader)}
                  >
                    <IoMdEye className="w-[14px] h-[14px]" />
                    Review Application
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReaderpendingModel
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedReader={selectedReader}
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

export default Readerpending;

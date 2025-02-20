"use client";
import React, { useState } from "react";
import readers from "../publishermanagements";
import { IoMdEye } from "react-icons/io";
import publishers from "../publishermanagements";
import PublisherModal from "./publisherModel";

const Publishers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(
    null
  );

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const totalPages = Math.ceil(readers.length / rowsPerPage);

  const openModal = (publisher: Publisher) => {
    setSelectedPublisher(publisher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPublisher(null);
  };

  // Calculate the rows to be displayed based on current page and rows per page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentPublishers = publishers.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="text-[24px] font-semibold">Publishers</div>
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
              Total Books Published
            </th>
            <th className="w-[200px] h-[60px] text-[14px] font-medium">Date</th>
            <th className="w-[217px] h-[60px] text-[14px] font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPublishers.map((publisher, index) => (
            <tr
              key={index}
              className="bg-[#FBFBFB] border-[#1818180D] border-b border-opacity-[20%]"
            >
              <td className="w-[100px] h-[60px] text-[14px] font-medium text-center">
                {publisher.id}
              </td>
              <td className="w-[220px] h-[60px] text-[14px] font-medium text-center">
                {publisher.name}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {publisher.email}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {publisher.totalbooks}
              </td>
              <td className="w-[200px] h-[60px] text-[14px] font-medium text-center">
                {publisher.date}
              </td>
              <td className="w-[217px] h-[60px] text-[14px] font-medium text-center">
                <div className="flex justify-center gap-4">
                  <button>
                    <IoMdEye
                      className="w-[24px] h-[24px] text-[#0D47A1]"
                      onClick={() => openModal(publisher)}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
      <PublisherModal
        isOpen={isModalOpen}
        publisher={selectedPublisher}
        onClose={closeModal}
      />
    </div>
  );
};

export default Publishers;

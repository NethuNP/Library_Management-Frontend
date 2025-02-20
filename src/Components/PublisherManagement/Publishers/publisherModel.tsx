"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiBooks } from "react-icons/pi";
import Image from "next/image";
import profile from "../../../../public/Icons/profile.png";
import Publisherebook from "./publisherebook";
import PublisherAudioBook from "./publisheraudiobook";
import Publishervideobook from "./publishervideobook";

const PublisherModal: React.FC<ModalProps> = ({
  isOpen,
  publisher,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<
    "ebook" | "audioBook" | "videoBook" | null
  >("ebook");

  if (!isOpen || !publisher) return null;

  const buttons = [
    { name: "E-Books", route: "ebook" },
    { name: "Audio books", route: "audioBook" },
    { name: "Video books", route: "videoBook" },
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[1280px] h-[864px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-lg hover:text-gray-900"
        >
          ✖
        </button>

        <h2 className="text-[24px] font-semibold mb-4 mt-6">
          Publisher Profile
        </h2>

        <div className="w-full h-[198px] border border-[#18181833]">
          <div className="grid grid-cols-6">
            <div className="flex items-center justify-center">
              <Image
                src={profile}
                alt="profile"
                className="w-[150px] h-[150px] mt-4 rounded-full"
              />
            </div>
            <div className="col-span-5 px-4">
              <div className="text-[24px] font-medium mt-4">
                {publisher.name}
              </div>
              <div className="mt-3">
                {publisher.email} | {publisher.contact}
              </div>
              <div className="mt-3">{publisher.description}</div>

              {/* Location & Books */}
              <div className="flex gap-4 mt-3">
                <div className="bg-[#0D47A1] px-4 text-white rounded flex items-center space-x-1">
                  <FaLocationDot />
                  <div>{publisher.country}</div>
                </div>

                <div className="bg-[#F1C40F] px-4 rounded flex items-center space-x-1">
                  <PiBooks />
                  <div>{publisher.totalbooks} Books Published</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex gap-4 mt-10">
            {buttons.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveTab(
                    item.route as "ebook" | "audioBook" | "videoBook"
                  )
                }
                className="bg-[#18181833] hover:bg-[#1818181A] px-4 rounded-lg border border-[#18181833] h-[48px]"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Ebook Section */}
          <div className="mt-6">
            {activeTab === "ebook" && <Publisherebook />}
            {activeTab === "audioBook" && <PublisherAudioBook />}
            {activeTab === "videoBook" && <Publishervideobook />}
          </div>

          <div className="absolute bottom-6 right-6">
            <button className="w-[111px] h-[48px] bg-[#0D47A1] text-white rounded-lg">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherModal;

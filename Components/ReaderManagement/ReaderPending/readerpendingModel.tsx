import React from "react";

const ReaderpendingModel: React.FC<ReaderpendingModelProps> = ({
  isOpen,
  onClose,
  selectedReader,
}) => {
  if (!isOpen || !selectedReader) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[1064px] h-[692px]">
        <h2 className="text-[24px] font-semibold mb-4 mt-10">
          Review Application
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mt-6">
              <label>Name:</label>
              <input
                type="text"
                value={selectedReader.name}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                readOnly
              />
            </div>
            <div className="mt-6">
              <label>Contact Number:</label>
              <input
                type="text"
                value={selectedReader.contact}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                readOnly
              />
            </div>
            <div className="mt-6">
              <label>Applied Date:</label>
              <input
                type="text"
                value={selectedReader.date}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                readOnly
              />
            </div>
          </div>
          <div>
            <div className="mt-6">
              <label>Email Address:</label>
              <input
                type="text"
                value={selectedReader.email}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                readOnly
              />
            </div>
            <div className="mt-6">
              <label>Country:</label>
              <input
                type="text"
                value={selectedReader.country}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end mt-40 gap-4">
          <button
            onClick={onClose}
            className="bg-[#91000052] border border-[#910000] text-[#910000] w-[120px] h-[49px] px-4 py-2 rounded-md"
          >
            Reject
          </button>
          <button
            onClick={onClose}
            className="bg-[#00692C] text-white px-4 py-2 w-[141px] h-[49px] rounded-md"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReaderpendingModel;

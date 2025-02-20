import React from "react";

const ReaderapprovedModel: React.FC<ReaderapprovedModelProps> = ({
  isOpen,
  onClose,
  selectedReader,
}) => {
  if (!isOpen || !selectedReader) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-[1064px] h-[692px]">
        <h2 className="text-[24px] font-semibold mb-4 mt-10">Reader Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mt-6">
              <label>User ID:</label>
              <input
                type="text"
                value={selectedReader.id}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                readOnly
              />
            </div>
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
        </div>

        {/* Modal Actions */}
        <div className="flex items-end justify-end mt-40 gap-4">
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

export default ReaderapprovedModel;

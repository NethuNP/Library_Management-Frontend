import React from "react";

const ReaderrejectedModel: React.FC<ReaderrejectedModelProps> = ({
  isOpen,
  onClose,
  selectedReader,
}) => {
  if (!isOpen || !selectedReader) return null;

  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-6 rounded-md w-[1064px] h-[692px] ">
          <h2 className="text-[24px] font-semibold mb-4 mt-10">
            Rejected Application
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mt-6">
                Name:
                <input
                  type="text"
                  value={selectedReader.name}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  readOnly
                />{" "}
              </div>
              <div className="mt-6">
                Contact number:
                <input
                  type="text"
                  value={selectedReader.contact}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full "
                  readOnly
                />{" "}
              </div>
              <div className="mt-6">
                Applied Date :
                <input
                  type="text"
                  value={selectedReader.date}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  readOnly
                />{" "}
              </div>
            </div>
            <div>
              <div className="mt-6">
                Email address :
                <input
                  type="text"
                  value={selectedReader.email}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  readOnly
                />{" "}
              </div>
              <div className="mt-6">
                Country:
                <input
                  type="text"
                  value={selectedReader.country}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  readOnly
                />{" "}
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default ReaderrejectedModel;

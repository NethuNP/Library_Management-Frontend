import React from "react";
import { ArrowLeft } from "lucide-react";

interface PersonalInfoProps {
  name: string;
  setDisplayName: (name: string) => void;
  country: string;
  setCountry: (country: string) => void;
  contact: string;
  setPhoneNumber: (phone: string) => void;
  handleContinue: (e: React.FormEvent) => void;
  handleBack: () => void;
  isOtpLoading: boolean
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  setDisplayName,
  country,
  setCountry,
  contact,
  setPhoneNumber,
  handleContinue,
  handleBack,
  isOtpLoading
}) => {
  return (
    <>
      <div className="flex items-center justify-center relative mb-1">
        <button
          onClick={handleBack}
          className="absolute top-0 left-0  items-center ml-4 mt-4 hidden sm:flex"
        >
          <ArrowLeft size={20} className="text-gray-500" />
          <span className="ml-4 text-gray-500 text-sm sm:text-base">Back</span>
        </button>
        <h1 className="text-gray-900 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full truncate ">
          Personal Information
        </h1>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center mb-6">
        Help us personalize your profile
      </p>

      <form
        onSubmit={handleContinue}
        className="text-center w-[90%] max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-left text-sm sm:text-base md:text-lg font-bold mb-2"
            htmlFor="displayName"
          >
            Display Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-left text-sm sm:text-base md:text-lg font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <div className="relative w-full ">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Where are you joining us from?</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-left text-sm sm:text-base md:text-lg font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
            id="contact"
            type="tel"
            placeholder="Enter your phone number"
            value={contact}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-64 md:w-full mx-auto sm:mx-0"
          type="submit"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default PersonalInfo;

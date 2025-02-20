import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from "next/image";
import Img from "../../../../public/Icons/ChangePassword.png";

interface ForgotPassword4Props {
  handleBack: () => void;
}

const ForgotPassword4: React.FC<ForgotPassword4Props> = ({ handleBack }) => {
  return (
    <>
      <div className="flex items-center mr-2 w-full max-w-md">
        <button onClick={handleBack} className="absolute top-0 left-0 flex items-center ml-4 mt-4">
          <ArrowLeft size={20} className='text-gray-500' />
          <span className="ml-4 text-gray-500">Back</span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-[90%] max-w-lg mx-auto">
        <Image src={Img} alt="Success" width={150} height={150} className="w-48 h-48 mb-6" />
        <h1 className="text-gray-900 text-5xl font-bold mb-4">Password reset successful!</h1>
        <p className="text-gray-600 text-xl text-center mb-6">You can log in with your new password.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in now
        </button>
      </div>
    </>
  );
};

export default ForgotPassword4;
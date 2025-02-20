import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ForgotPassword1Props {
  email: string;
  setEmail: (email: string) => void;
  handleContinue: (e: React.FormEvent) => void;
  handleBack: () => void;
}

const ForgotPassword1: React.FC<ForgotPassword1Props> = ({
  email,
  setEmail,
  handleContinue,
  handleBack,
}) => {
  return (
    <>
      <div className="flex items-center mr-2 w-full max-w-md">
        <button onClick={handleBack} className="absolute top-0 left-0 flex items-center ml-4 mt-4">
          <ArrowLeft size={20} className='text-gray-500' />
          <span className="ml-4 text-gray-500">Back</span>
        </button>
        <h1 className="text-gray-900 text-center text-6xl font-bold w-full truncate mb-4">Forgot your password?</h1>
      </div>
      <p className="text-gray-600 text-xl text-center mb-6">No worries! Enter your email, and we'll help you reset it.</p>

      <form onSubmit={handleContinue} className="text-center w-[90%] max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl text-left font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Send reset code
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Remembered your password? <a href="/login" className="text-blue-500">Log in instead</a>
      </p>
    </>
  );
};

export default ForgotPassword1;
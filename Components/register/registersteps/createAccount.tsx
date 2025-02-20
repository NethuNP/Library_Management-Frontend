import React from 'react';
import { Eye, EyeOff } from 'lucide-react';


interface CreateAccountProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  togglePasswordVisibility:() => void;
  handleContinue: (e: React.FormEvent) => void;
}
const CreateAccount: React.FC<CreateAccountProps> = ({
  email,
  setEmail,
  showPassword,
  togglePasswordVisibility,
  handleContinue,
}) => {
  const TickIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4 mr-2 text-gray-400"
    >
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.17 13.59L7.7 12.46a1 1 0 0 1 1.41-1.41l1.72 1.73 4.46-4.47a1 1 0 1 1 1.42 1.41Z" />
    </svg>
  );


  return (
    <>
      <h1 className="text-center text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Create Your Account
      </h1>
      <p className="text-center mb-6 text-sm sm:text-base md:text-lg text-gray-600">
          Let's get you started with your login details
      </p>

      <form onSubmit={handleContinue} className="text-center w-[90%] max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-left text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
            id="email"
            type="email"
            placeholder="Provide a valid email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create secure password"
              className="mt-1 block w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 text-gray-700 flex items-center text-sm leading-5"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>
            <ul className="text-xs sm:text-sm text-gray-600 mt-2">
            <li className="flex items-center">
              <TickIcon /> At least 8 characters
            </li>
            <li className="flex items-center">
              <TickIcon /> At least 1 uppercase letter
            </li>
            <li className="flex items-center">
              <TickIcon /> At least 1 lowercase letter
            </li>
            <li className="flex items-center">
              <TickIcon /> At least 1 number
            </li>
          </ul>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-left text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="repeat-password">
              Repeat Password
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
            id="repeat-password"
            type={showPassword ? "text" : "password"}
            placeholder="Re-enter above password"
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

      <p className="mt-4 text-center text-gray-600 text-xs sm:text-sm">
        Do you have an account? <a href="/login" className="text-blue-500">Sign in</a>
      </p>
    </>
  );
};

export default CreateAccount;
import React from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface ForgotPassword3Props {
  newPassword: string;
  setNewPassword: (password: string) => void;
  repeatPassword: string;
  setRepeatPassword: (password: string) => void;
  handleContinue: (e: React.FormEvent) => void;
  handleBack: () => void;
}

const ForgotPassword3: React.FC<ForgotPassword3Props> = ({
  newPassword,
  setNewPassword,
  repeatPassword,
  setRepeatPassword,
  handleContinue,
  handleBack,
}) => {
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  return (
    <>
      <div className="flex items-center mr-2 w-full max-w-md">
        <button onClick={handleBack} className="absolute top-0 left-0 flex items-center ml-4 mt-4">
          <ArrowLeft size={20} className='text-gray-500' />
          <span className="ml-4 text-gray-500">Back</span>
        </button>
        <h1 className="text-gray-900 text-center text-5xl font-bold w-full truncate mb-4">Create a new password</h1>
      </div>
      <p className="text-gray-600 text-xl text-center mb-6">Enter a new password to regain access to your account.</p>

      <form onSubmit={handleContinue} className="text-center w-[90%] max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl text-left font-bold mb-2" htmlFor="newPassword">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              placeholder="Enter your new password"
              className="mt-1 block w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 text-gray-700 flex items-center text-sm leading-5"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-2xl text-left font-bold mb-2" htmlFor="repeatPassword">
            Repeat Password
          </label>
          <div className="relative">
            <input
              type={showRepeatPassword ? "text" : "password"}
              id="repeatPassword"
              placeholder="Re-enter your new password"
              className="mt-1 block w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={toggleRepeatPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 text-gray-700 flex items-center text-sm leading-5"
            >
              {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Reset Password
        </button>
      </form>
    </>
  );
};

export default ForgotPassword3;
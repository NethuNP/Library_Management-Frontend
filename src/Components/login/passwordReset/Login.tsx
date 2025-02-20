import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginSlideProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleContinue: (e: React.FormEvent) => void;
  handleForgotPassword: () => void;
}

const LoginSlide: React.FC<LoginSlideProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleContinue,
  handleForgotPassword,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h1 className="block text-center text-gray-900 text-6xl font-bold mb-4">Hello, Reader!</h1>
      <p className="text-center mb-6 text-xl text-gray-600">Sign in to access your bookshelf and more</p>
      
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

        <div className="mb-4">
          <label className="block text-gray-700 text-2xl text-left font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 text-gray-700 flex items-center text-sm leading-5"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button> */}
          </div>
        </div>

        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-blue-500 hover:text-blue-700 text-sm font-bold mb-6"
        >
          Forgot password?
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Continue
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
      </p>
    </>
  );
};

export default LoginSlide;
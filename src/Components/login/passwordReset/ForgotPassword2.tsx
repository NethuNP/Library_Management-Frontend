import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ForgotPassword2Props {
  email: string;
  otp: string;
  setOtp: (otp: string) => void;
  handleContinue: (e: React.FormEvent) => void;
  handleBack: () => void;
}

const ForgotPassword2: React.FC<ForgotPassword2Props> = ({
  email,
  otp,
  setOtp,
  handleContinue,
  handleBack,
}) => {
  const maskEmail = (email: string) => {
    const [username, domain] = email.split('@');
    if (username.length <= 1) return `${username}@${domain}`;
    const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 1);
    return `${maskedUsername}@${domain}`;
  };

  return (
    <>
      <div className="flex items-center mr-2 w-full max-w-md">
        <button onClick={handleBack} className="absolute top-0 left-0 flex items-center ml-4 mt-4">
          <ArrowLeft size={20} className='text-gray-500' />
          <span className="ml-4 text-gray-500">Back</span>
        </button>
        <h1 className="text-gray-900 text-center text-5xl font-bold w-full truncate mb-4">Verify your email address</h1>
      </div>
      <p className="text-gray-600 text-xl text-center mb-6">
        We've sent a confirmation code to {maskEmail(email)}. Please check your inbox.
      </p>

      <form onSubmit={handleContinue} className="text-center w-[90%] max-w-lg mx-auto">
        <div className="mb-4">
          <div className="flex justify-center mt-10 space-x-2">
            {[...Array(6)].map((_, index) => (
              <React.Fragment key={index}>
                <input
                  className="shadow appearance-none border rounded w-12 h-12 text-center text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  type="text"
                  maxLength={1}
                  value={otp[index] || ''}
                  onChange={(e) => {
                    const newOtp = otp.split('');
                    newOtp[index] = e.target.value.replace(/\D/g, ''); // Allow only digits
                    setOtp(newOtp.join(''));

                    // Auto-focus next input
                    if (e.target.value && index < 5) {
                      const nextInput = document.getElementById(`otp-${index + 1}`);
                      if (nextInput) nextInput.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    // Handle backspace to move to the previous input
                    if (e.key === 'Backspace' && !otp[index] && index > 0) {
                      const prevInput = document.getElementById(`otp-${index - 1}`);
                      if (prevInput) prevInput.focus();
                    }
                  }}
                  id={`otp-${index}`}
                />
                {index === 2 && <span className="self-center text-gray-700">-</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 mb-6">
          <button
            className="text-blue-500 hover:text-blue-700 text-sm font-bold"
            type="button"
          >
            Resend email
          </button>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default ForgotPassword2;
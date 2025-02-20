'use client';
import React, { useState } from 'react';
import LoginSlide from './passwordReset/Login';
import ForgotPassword1 from './passwordReset/ForgotPassword1';
import ForgotPassword2 from './passwordReset/ForgotPassword2';
import ForgotPassword3 from './passwordReset/ForgotPassword3';
import ForgotPassword4 from './passwordReset/ForgotPassword4';

// Simple reusable Modal component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white w-[90%] max-w-lg p-8 md:p-12 rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Login = () => {
  const [step, setStep] = useState(1); // 1: Login, 2: ForgotPassword1, ..., 5: ForgotPassword4
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {step === 1 && (
          <LoginSlide
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleContinue={handleContinue}
            handleForgotPassword={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <ForgotPassword1
            email={email}
            setEmail={setEmail}
            handleContinue={handleContinue}
            handleBack={handleBack}
          />
        )}
        {step === 3 && (
          <ForgotPassword2
            email={email}
            otp={otp}
            setOtp={setOtp}
            handleContinue={handleContinue}
            handleBack={handleBack}
          />
        )}
        {step === 4 && (
          <ForgotPassword3
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
            handleContinue={handleContinue}
            handleBack={handleBack}
          />
        )}
        {step === 5 && <ForgotPassword4 handleBack={handleBack} />}
      </Modal>
    </div>
  );
};

export default Login;

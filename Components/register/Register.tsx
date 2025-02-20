'use client';
import React, { useState } from 'react';
import CreateAccount from './registersteps/createAccount';
import PersonalInfo from './registersteps/personalInfo';
import VerifyEmail from './registersteps/verifyEmail';
import ActiveMembership from './registersteps/activeMembership';
import { useRegisterMutation } from '../../app/Redux/features/authApiSlice';

// Simple reusable Modal component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white w-[80%] max-w-3xl p-8 md:p-12 rounded-lg shadow-xl">
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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setDisplayName] = useState('');
  const [country, setCountry] = useState('');
  const [contact, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [registerUser, { isLoading }] = useRegisterMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRegister = async () => {
    try {
      const userData = { name, email, password, country, contact, otp };
      const response = await registerUser(userData).unwrap();
      console.log('Registration successful:', response);
      setIsModalOpen(false); 
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
    return; 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {error && <p className="text-red-500">{error}</p>}
        
        {step === 1 && (
          <CreateAccount
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            handleContinue={handleContinue}
          />
        )}
        {step === 2 && (
          <PersonalInfo
            name={name}
            setDisplayName={setDisplayName}
            country={country}
            setCountry={setCountry}
            contact={contact}
            setPhoneNumber={setPhoneNumber}
            handleContinue={handleContinue}
            handleBack={handleBack}
            isOtpLoading={isLoading}
          />
        )}
        {step === 3 && (
          <VerifyEmail
            email={email}
            otp={otp}
            setOtp={setOtp}
            handleContinue={handleContinue}
            handleBack={handleBack}
          />
        )}
        {step === 4 && (
          <ActiveMembership
            handleBack={handleBack}
            handleRegister={handleRegister}
            isLoading={isLoading}
          />
        )}
      </Modal>
    </div>
  );
};

export default Register;

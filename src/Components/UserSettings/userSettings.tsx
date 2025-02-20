"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";
import user from "@/Components/image/user.png";
import { useRef } from 'react';

export default function UserSettings() {
  const [image, setImage] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  const [formData, setFormData] = useState({
    user: "Alex Benjamin",
    email: "alexbenjamin@gmail.com",
    password: "********",
  });
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

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

const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const value = e.target.value.replace(/\D/, ""); // Only allow numbers
  if (!value) return; // Ignore empty values

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  // Move to the next input field
  if (index < 5 && value) {
    otpRefs.current[index + 1]?.focus();
  }
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
  if (e.key === "Backspace" && index > 0 && !otp[index]) {
    otpRefs.current[index - 1]?.focus();
  }
};

const handleVerifyOTP = () => {
  // Add OTP verification logic here
  setOtpModalOpen(false);
};

const handleResendOTP = () => {
  console.log("Resending OTP...");
};


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const enableEditing = (key: string) => {
    setEditingField(key);
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleBlur = () => {
    setEditingField(null);
  };
  const otpRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="max-w mx-28 p-6 rounded-lg bg-transparent">
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="imageUpload" className="relative w-36 h-36 border rounded-full overflow-hidden cursor-pointer">
          <Image
            src={image || user}
            alt="Profile"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <div className="absolute left-16 ml-16">
          <h1 className="text-2xl font-bold text-gray-950">Settings</h1>
        </div>
      </div>

      <div className="space-y-4 grid grid-cols-1 gap-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex items-center relative">
            <label className="w-1/3 text-gray-950 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
            <div className="w-2/3 flex items-center relative">
              <input
                type={key === "password" ? "password" : "text"}
                className="w-full p-2 border rounded pr-10 text-slate-950"
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
                readOnly={editingField !== key}
                autoFocus={editingField === key}
                onBlur={handleBlur}
                onKeyDown={(e) => e.key === "Enter" && handleBlur()}
              />
              <Pencil className="absolute right-14 text-gray-500 cursor-pointer hover:text-gray-800" size={18} onClick={() => enableEditing(key)} />
              {key === "email" && (
                <button className="absolute right-0 mb-14 text-blue-600" onClick={() => setEmailModalOpen(true)}>
                  Change Email
                </button>
              )}
              {key === "password" && (
                <button className="absolute right-0  mb-14 text-blue-600" onClick={() => setPasswordModalOpen(true)}>
                  Change Password
                </button>
              )}
            </div>
          </div>
        ))}

        <div>
          <button className="w-[150px] p-2 bg-blue-600 text-white rounded-md">Save Changes</button>
        </div>
      </div>

      {/* Change Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] h-[400px]">
            <h3 className="text-lg  text-zinc-900 font-semibold ">Change Email</h3>
            <input
              type="email"
              placeholder="Enter New Email"
              className="border p-2 w-full mb-2"
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button className="px-4 py-2 w-[300px] h-[30px] bg-blue-600 text-white rounded" onClick={() => { setEmailModalOpen(false); setOtpModalOpen(true); }}>
              Send OTP
            </button>
            <button className="ml-2 px-4 py-2  h-[30px] bg-gray-400 text-white rounded" onClick={() => setEmailModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {isOtpModalOpen && (
   <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
   <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] text-center">
     <h3 className="text-xl font-semibold">Verify Your Email Address</h3>
     <p className="text-gray-600 text-sm mt-2">
       We've sent a confirmation code to j*****@gmail.com.  
       Please check your inbox.
     </p>

     {/* OTP Input Fields */}
     <div className="flex justify-center gap-2 mt-4">
        
       {otp.map((digit, index) => (
     <input
     key={index}
     type="text"
     maxLength={1}
     value={digit}
     ref={otpRef}
     onChange={(e) => handleOtpChange(e, index)}
     onKeyDown={(e) => handleKeyDown(e, index)}
     className="w-12 h-12 text-center text-lg border text-slate-950 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
   />
       ))}
     </div>

     {/* Resend Email */}
     <button className="text-blue-600 text-sm mt-3" onClick={handleResendOTP}>
       Resend Email
     </button>

     {/* Continue Button */}
     <button
       className="w-full p-3 bg-blue-600 text-white rounded-md mt-4"
       onClick={handleVerifyOTP}
     >
       Continue
     </button>
   </div>
 </div>
      )}

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <label className="block text-gray-700 text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
            <input
              type={ "password"}
              id="password"
              placeholder="Create secure password"
              className="mt-1 block w-full sm:w-64 md:w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-auto sm:mx-0"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 text-gray-700 flex items-center text-sm leading-5"
            >
              {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
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
            <input type="password" placeholder="Confirm Password" className="border p-2 w-full mb-2" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setPasswordModalOpen(false) }>
              Update Password
            </button>
            <button className="ml-2 px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setPasswordModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

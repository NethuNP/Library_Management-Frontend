"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil } from "lucide-react"; // Import Pencil Icon
import user from '@/Components/image/user.png';

export default function ProfileEdit() {
  const [image, setImage] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "Alex Benjamin",
    email: "alexbenjamin@gmail.com",
    contact: "+11234567890",
    country: "United States",
    website: "alexbenjamin.com",
    about: "Dedicated to sharing unique voices with the world, we publish stories that inspire, educate, and entertain readers of all genres.",
    password: "********"
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file); 
      setImage(imageUrl);
    }
  };

  // Enable editing on field click
  const enableEditing = (key: string) => {
    setEditingField(key);
  };

  // Handle input change
  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Save changes when clicking outside or pressing Enter
  const handleBlur = () => {
    setEditingField(null);
  };

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
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-950">Account Infomation</h1>
      </div>

      <div className="space-y-4 grid grid-cols-1 gap-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex items-center relative">
            <label className="w-1/3 text-gray-950 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <div className="w-2/3 flex items-center relative">
              <input
                type={key === "password" ? "password" : "text"}
                className="w-full p-2 border rounded pr-10 text-slate-950"
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
                readOnly={editingField !== key}
                autoFocus={editingField === key}
                onBlur={handleBlur} // Save when clicking outside
                onKeyDown={(e) => e.key === "Enter" && handleBlur()} // Save on Enter
              />
              <Pencil
                className="absolute right-3 text-gray-500 cursor-pointer hover:text-gray-800"
                size={18}
                onClick={() => enableEditing(key)}
              />
            </div>
          </div>
        ))}
        <div>
          
          <button className="w-[150px] p-2 bg-blue-600 text-white rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

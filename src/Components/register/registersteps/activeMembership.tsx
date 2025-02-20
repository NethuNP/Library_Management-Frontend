import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from "next/image";
import Img from "/public/image.png";
import { loadStripe } from '@stripe/stripe-js';



interface ActiveMembershipProps {
  handleBack: () => void;
  handleRegister: () => Promise<void>
  isLoading: boolean
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const ActiveMembership: React.FC<ActiveMembershipProps> = ({ handleBack }) => {
  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:5070/api/payment/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Subscription error:', error);
      // Handle error in UI
    }
  };
  return (
    <>
      <div className="flex items-center mr-2 w-full max-w-md">
        <button onClick={handleBack} className="absolute top-0 left-0 flex items-center ml-4 mt-4">
          <ArrowLeft size={20} className='text-gray-500' />
          <span className="ml-4 text-gray-500">Back</span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center w-[90%] max-w-lg mx-auto">
        <Image 
          src={Img} 
          alt="Membership" 
          width={192} 
          height={192} 
          className="w-32 h-32 md:w-48 md:h-48 mb-6" 
        />
        
        <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-4">Activate Your Membership</h1>
        <p className="text-gray-600 text-lg md:text-xl text-center mb-6">Unlock access to all books and resources with a yearly subscription.</p>
        
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-lg md:text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubscribe}
        >
          Join as a member for $49.99/year
        </button>

      </div>
    </>
  );
};

export default ActiveMembership;
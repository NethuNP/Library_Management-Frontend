"use client";
import React from "react";
import BeforReg from '@/Components/image/beforReg.jpeg';
import image from '@/Components/image/image.jpeg';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {BookCards} from "./BookCards";
import { bookData } from "./bookData";
import {navcartData} from "./navcartData"
import books from '@/Components/image/books.png'
import {NavCarts} from "@/Components/BeforRegister/NavCarts"
import  { useState } from "react";
import RegisterForm from "@/Components/register/Register"
import Register from "@/Components/register/Register";


const BookComponent = () => {
    const router = useRouter ();
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const handleBlur = () => {
      setRegisterModalOpen(false);
    };

  
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 ml-10">
          <h2 className="text-4xl font-bold text-gray-800">Unlock Knowledge, Anytime, Anywhere!</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover a collection of free books or get unlimited access to exclusive e-books, audiobooks, and video
            books with our premium membership.
          </p>

          <button onClick={() => setRegisterModalOpen(true)} className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">

          

            Become a Member
          </button>
        </div>

        <div className="grid  grid-cols-1 grid-rows-3 relative z-30 left-44 gap-3">
        {navcartData.map((index) => (
        <NavCarts key={index.key} image={index.image} title1={index.title1} title2={index.title2}  />
))}
        </div>

        <div className=" mt-6 md:mt-0">
          <Image
            src={BeforReg} 
            alt="Book"
            className="w-[700px] h-[500px] border rounded-tl-[200px]  shadow-lg"
          />
        </div>
      </div>

      <div className="mt-16 px-6">
        <h3 className="text-3xl font-semibold text-gray-800">Read for Free</h3>
        <h3 className="text-3xl font-semibold text-gray-800">Get a Taste Of Our Library!</h3>
        <p className="mt-2 text-lg text-gray-600">Enjoy a selection of free books before unlocking our full library with a membership.</p>
        
        <div className="flex justify-end  mr-16 relative bottom-20  md:ml-5 md:justify-end">
        <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 " onClick={() => router.push("/pages/BeforeRegisterCategoryPage")}>
          Explore More Books
        </button>
        </div>
        
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3 mx-auto w-full">
          {bookData.map(( index) => (
          <BookCards key={index.key} image={index.image} title={index.title} author={index.author} button={index.button} />
        ))}
    </div>

      </div>

      {isRegisterModalOpen && (
        <div  onBlur={handleBlur} className=" fixed inset-0 flex items-center justify-center bg-gray-900 z-50 bg-opacity-50">
            <Register  />
        </div>
      )}
      
      <div className="w-full flex flex-col items-center mt-8 gap-10 px-9">
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4
      rounded-lg bg-transparent">
        <div className="w-full">
          <Image
            src={image} 
            alt="E-book Reader"
            className="w-[500px]  h-[500px]  shadow-lg rounded-tr-[100px] rounded-bl-[100px] "
          />
        </div>

        <div className="flex flex-col relative mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Enjoy Free E-Books? Unlock Everything!
          </h2>
          <p className="text-gray-700 mt-2">Our Library, Unlimited & Unlocked</p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>📚 Unlimited PDFs, audiobooks & video books</li>
            <li>🌑 Seamless access anytime, anywhere</li>
            <li>📒 Create and share your own book collections</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white text-sm   w-32 py-3 rounded-lg
           hover:bg-blue-700"
           onClick={() => setRegisterModalOpen(true)}
           
           >
            Become a Member
          </button>
        </div>
      </div>
      <div className=" w-full h-[300px] bg-blue-100 px-24 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Join Today & Unlock Endless Knowledge!
          </h2>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          onClick={() => setRegisterModalOpen(true)}
          >
            Become a Member
          </button>
        </div>
        <Image
          src={books}
          alt="Stack of Books"
          className="w-[400px] z-30 relative h-auto  bottom-28"
        />
      </div>
    </div>
    </div>
  );
};

export default BookComponent;

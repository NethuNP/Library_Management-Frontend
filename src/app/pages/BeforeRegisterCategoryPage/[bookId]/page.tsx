// src/app/pages/BeforeRegisterCategoryPage/[bookId]/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Header from "@/Components/common/Header";
import { useParams } from "next/navigation";
import { bookData } from '@/Components/BeforRegister/CategoryPage/bookData';
import BookCards from '@/Components/BeforRegister/CategoryPage/BookCards';
import { BookDataProps, BookBaseProps } from '@/Components/BeforRegister/CategoryPage/type';
import Footer from "@/Components/common/Footer";

const BookDetailsPage = () => {
  const params = useParams<{ bookId: string }>();
  const book = bookData.find((b: BookDataProps) => b.id === params.bookId);

  if (!book) return (
    <div className="text-center py-8">
      <h2 className="text-xl font-bold mb-2">Book Not Found</h2>
      <p className="text-gray-600">The requested book could not be found</p>
      <Link href="/pages/BeforeRegisterCategoryPage" className="text-blue-600 mt-4 inline-block">
        Return to Book List
      </Link>
    </div>
  );

  return (
    <div>
      <Header/>
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Book Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Cover & Buttons */}
          <div className="md:col-span-1">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-6 space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Save to Reading List
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2">
            <h1 className="text-3xl text-black font-bold mb-4">{book.title}</h1>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className='flex'>
                <p className="text-medium font-bold text-black m-0">Category:</p>
                <p className="font-medium text-black m-0 pl-20">{book.categoryType}</p>
              </div>
              <div className='flex'>
                <p className="text-medium font-bold  text-black m-0">Author:</p>
                <p className="font-medium text-black m-0 ml-24 pl-15">{book.author}</p>
              </div>
              <div className='flex'>
                <p className="text-medium font-bold text-black m-0">Genre:</p>
                <p className="font-medium text-black m-0 ml-11 pl-14">{book.genre}</p>
              </div>
              <div className='flex'>
                <p className="text-medium font-bold text-black m-0">Pages:</p>
                <p className="font-medium text-black m-0 ml-5 pl-20">{book.pages}</p>
              </div>
              <div className='flex'>
                <p className="text-medium font-bold text-black m-0">Publication Date:</p>
                <p className="font-medium text-black m-0 pl-5">{book.publicationDate}</p>
              </div>
              <div className='flex'>
                <p className="text-medium font-bold text-black m-0">Available Formats:</p>
                <p className="font-medium text-black m-0 ml-3 ">{book.formats.join(', ')}</p>
              </div>
            </div>

            <div className="mb-8">
              {/* <h3 className="text-lg font-semibold mb-2">Description</h3> */}
              <p className="text-black leading-relaxed">{book.description}</p>
            </div>
          </div>
        </div>

        {/* More Books Section */}
        <div className="border-t pt-8">
          <h2 className="text-2xl text-black font-bold mb-6">More Free Books to Read</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookData
              .filter((b: BookDataProps) => b.id !== book.id)
              .slice(0, 3)
              .map((book) => (
                <BookCards
                  key={book.id}
                  id={book.id}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  button={book.button}
                  category={book.category}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BookDetailsPage; 
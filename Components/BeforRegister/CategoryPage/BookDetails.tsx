// import React from "react";
// import { BookDataProps } from "./type";

// interface BookDetailsProps {
//   book: BookDataProps;
// }

// const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg shadow-lg">
//       {/* Left Side: Book Details */}
//       <div className="flex-1">
//         <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
//         <p className="text-gray-600 mb-2">
//           <span className="font-semibold">Category:</span> {book.category}
//         </p>
//         <p className="text-gray-600 mb-2">
//           <span className="font-semibold">Author:</span> {book.author}
//         </p>
//         <p className="text-gray-600 mb-2">
//           <span className="font-semibold">Genre:</span> {book.genre}
//         </p>
//         <p className="text-gray-600 mb-2">
//           <span className="font-semibold">Pages:</span> {book.pages}
//         </p>
//         <p className="text-gray-600 mb-2">
//           <span className="font-semibold">Publication Date:</span>{" "}
//           {book.publicationDate}
//         </p>
//         <p className="text-gray-600 mb-4">
//           <span className="font-semibold">Available Formats:</span>{" "}
//           {book.availableFormats.join(", ")}
//         </p>
//         <p className="text-gray-700">{book.description}</p>
//       </div>

//       {/* Right Side: Book Cover and Buttons */}
//       <div className="flex flex-col items-center">
//         <img
//           src={book.image}
//           alt={book.title}
//           className="w-48 h-64 object-cover rounded-lg mb-4"
//         />
//         <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg mb-2 hover:bg-blue-700 transition-colors duration-300">
//           Download PDF
//         </button>
//         <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
//           Save to Reading List
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
import React ,{useState} from "react";
import BookCards from "./BookCards";
import { useGetBooksQuery } from "@/app/Redux/features/bookSlice";
import { Book } from "@/types/types";
import { BASE_URL } from "@/app/utils/apiConfig";



interface ResponseData{
  books: Book[];
  total: number;
} 
interface BookDisplayProps {
  category: string;
}


const BookDisplay = ({ category }: BookDisplayProps) => {
  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetBooksQuery<{
    data: ResponseData | undefined;
    isLoading: boolean;
    isError: boolean;
  }>();

  
  // Filter books that are Approved
  const books =
    responseData?.books.filter(
      (book) => book.status === "Approved" && book.genre === category
    ) ?? [];

    const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(books.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentBooks = books.slice(indexOfFirstRow, indexOfLastRow);



  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 mx-auto w-full bg-white p-6">
      {currentBooks.map((book) => (
        <BookCards
          key={book.book_id} 
          id={book.book_id}
          image={`${BASE_URL}/${book.coverImage}`} 
          title={book.title}
          author={book.author}
          
        />
      ))}
    </div>
  );
};

export default BookDisplay;
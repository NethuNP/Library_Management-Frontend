// src/Components/BeforeRegister/BookCards.tsx
import Link from 'next/link';
import { BookBaseProps } from './type';

const BookCards: React.FC<BookBaseProps> = ({ id, image, title, author }) => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <Link href={`pages/BeforeRegisterCategoryPage/${id}`} passHref className="block">
        <div className="grid grid-cols-2 gap-4 items-center">
          <img
            src={image}
            alt={title}
            className="w-full sm:w-[170px] h-[220px] rounded-lg object-cover"
          />
          
         
          <div className="flex flex-col h-full justify-center">
            <h4 className="text-lg sm:text-xl mb-2 font-semibold text-gray-700">{title}</h4>
            <h5 className="text-md sm:text-lg mt-0 font-medium text-gray-500">{author}</h5>
            <button className='border rounded-lg border-blue-700 w-[100px] mt-4'>Book Now</button>
              
           
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCards;
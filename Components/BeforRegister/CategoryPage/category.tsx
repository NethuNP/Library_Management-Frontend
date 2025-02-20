import {BookDataProps} from "./type";

export const BookCards = ({ image, title, author }: BookDataProps) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 items-center">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full sm:w-[170px] h-[220px] rounded-lg object-cover" />

      {/* Book Info Section */}
      <div className="grid-rows-3 justify-between h-full">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-700">{title}</h4>
        <h5 className="text-md sm:text-lg font-medium text-gray-500">{author}</h5>
        
      </div>
    </div>
  </div>
  );
};
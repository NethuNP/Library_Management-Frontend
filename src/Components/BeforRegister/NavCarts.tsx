import navcartprops from "./navcartType"
import Image from "next/image";
import Link from "next/link";
export const NavCarts = ({ image, title1, title2 }: navcartprops) => {
  return ( 
    <div className=" relative z-30 top-28  ">
            <Link href={""}>
            <div className="w-[300px] h-[60px] z-50 bg-white bg-opacity-50  rounded-lg  flex gap-5 ">
                    <Image src={image} alt={title1} className="w-8 h-6" />
                    <div className="grid grid-rows-2 ml-28 relative ">
                        <div>
                        <h1 className="text-black ">{title1}</h1>
                        </div>
                    <div>
                    <h2 className="text-slate-700 text-end text-sm w-full">{title2} </h2>
                    </div>
                    
                    </div>
                </div>
            </Link>
    {/* <div className="w-[300px] h-[60px] z-50 bg-white bg-opacity-50  rounded-lg ">
    </div>
    <div className="w-[300px] h-[60px] z-50 bg-white bg-opacity-50  rounded-lg ">
    </div> */}
</div>
  );
};
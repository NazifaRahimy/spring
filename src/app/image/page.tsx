import { FaQuoteRight } from "react-icons/fa";

const Image = () => {
    return (  
        <div className="w-full  box-border px-[80px] py-10">
           <h2 className="mt-10 text-center mb-4 text-[#232323] font-semibold text-xl">عکس نوشته عاشقانه بهاری</h2>
              <div  >
                   <div ><FaQuoteRight /></div>
                   <p >زیبای من</p>
                   <p >به شوق تو قدم در خیابان می گذارم</p>
                   <p >درختان بهاری را تماشا می کنم و مست می شوم از بوی شکوفه و سبزه و <span className="text-blue-700 hover:text-red-600 duration-100">باران</span></p>
              </div>
        </div>
    );
}
 
export default Image;
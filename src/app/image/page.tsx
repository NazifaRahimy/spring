import { FaQuoteRight } from "react-icons/fa";

const Image = () => {
    return (  
        <div className="w-full  box-border px-[80px] py-10">
           <h2 className="mt-10 text-center mb-4 text-[#232323] font-semibold text-xl">عکس نوشته عاشقانه بهاری</h2>
            <div className="bg-gray-100 text-center w-[900px] h-auto   rounded-2xl border-box px-10 mx-auto mt-10 pb-5" >
                <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                <p className="text-xl font-normal px-3">زیبای من</p>
                <p className="text-xl font-normal px-3">به شوق تو قدم در خیابان می گذارم</p>
                <p className="text-xl font-normal px-3">درختان بهاری را تماشا می کنم و مست می شوم از بوی شکوفه و سبزه و <span className="text-blue-700 hover:text-red-600 duration-100">باران</span></p>
            </div>
               <div className="bg-gray-100 text-center w-[900px] h-auto   rounded-2xl border-box px-10 mx-auto mt-10 pb-5" >
                   <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                  <p className="text-xl font-normal px-3">با شکفتن اولین شکوفه در بهار بود که عشق به خانه من آمد</p>
                  <p className="text-xl font-normal px-3">اینک در بهاری دیگر سرشار از حس زیستنم کنار تو همسر دوست داشتنی من</p>
              </div>
                <div className="bg-gray-100 text-center w-[900px] h-auto   rounded-2xl border-box px-10 mx-auto mt-10 pb-5" >
                  <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                  <p className="text-xl font-normal px-3">بوی مطبوعِ گل و منظره‌ای رو به بهار</p>
                  <p className="text-xl font-normal px-3">پنجره پشت ِ خودش یک من و تو کم دارد</p>
                  <p className="text-xl font-normal px-3">علیرضا صادقی</p>
              </div>
            
        </div>
    );
}
 
export default Image;
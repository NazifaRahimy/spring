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
               <div className="w-[900px]   rounded-[20px]  mt-10 mx-auto">
                  <img className="w-[900px]  rounded-[20px]"src="https://roozaneh.net/wp-content/uploads/2024/03/bahare-ziba-2.jpg.webp" alt="" />
             </div>
             <div className="bg-gray-100 text-center w-[900px] h-auto   rounded-2xl border-box px-10 mx-auto mt-10 pb-5" >
                  <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                  <p className="text-xl font-normal px-3">قرارمان  همین بهار</p>
                  <p className="text-xl font-normal px-3">زیر شکوفه های شعر !</p>
                  <p className="text-xl font-normal px-3">آنجا که واژه ها</p>
                  <p className="text-xl font-normal px-3">برای تو گل می کنند</p>
                  <p className="text-xl font-normal px-3">آنجا که حرف های زمین افتاده ام</p>
                  <p className="text-xl font-normal px-3">دوباره سبز می شوند</p>
                  <p className="text-xl font-normal px-3">وَ دست های عاشقمان</p>
                  <p className="text-xl font-normal px-3"></p>
                  <p className="text-xl font-normal px-3">گره در کارِ سبزه ها می اندازند ؛</p>
                  <p className="text-xl font-normal px-3">قرارمان زیرِ چشم های تو !</p>
                  <p className="text-xl font-normal px-3">آنجا که شعر نم نم شروع می شود</p>
              </div>
              <div>
                  <div ><FaQuoteRight /></div>
                  <p >تو اگر بهار را صدا کنی،</p>
                  <p >می آید!</p>
                  <p >حتی اگر دلش؛</p>
                  <p >جا مانده باشد میان برف‌ ها…</p>
             </div>
        </div>
    );
}
 
export default Image;
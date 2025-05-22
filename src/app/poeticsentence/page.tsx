import { FaQuoteRight } from "react-icons/fa";

const Poeticsentence = () => {
    return (  
        <div className="w-full  box-border px-[80px] py-10">
            <h1 className="text-2xl mt-10 mb-4 font-semibold  text-center">جملات ادبی در مورد بهار</h1>
              <div className="bg-gray-100 text-center w-[900px] h-auto   rounded-2xl border-box px-10 mx-auto mt-10 pb-5" >
                <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                <p className="text-xl font-normal px-3">بـــهار را ببین</p>
                <p className="text-xl font-normal px-3">چگونه از خود می تــکانَد برگ های فرسوده را</p>
                <p className="text-xl font-normal px-3">تو هم جوانه ای بزن</p>
                <p className="text-xl font-normal px-3">ســبز شـــو</p>
                <p className="text-xl font-normal px-3">بـهـار</p>
                <p className="text-xl font-normal px-3">ادامه ی لبخندهای تو خواهد بود…</p>
                <p className="text-xl font-normal px-3">“مینا آقازاده”</p>
            </div>
             <div className="bg-gray-100 text-center w-[900px] h-auto  rounded-2xl border-box px-10 mt-10 mx-auto" >
                <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                <h2 className="text-xl font-normal mt-6  pb-10 px-20 text-center ">وصفی نیست، برای شادی عمیقی که در قلب من است از دیدن تو بهار زندگیم
                       دوستت دارم</h2>
            </div>
              <div className="w-[900px]   rounded-[20px]  mt-10 mx-auto">
                <img className="w-[900px]  rounded-[20px]"src="https://roozaneh.net/wp-content/uploads/2024/03/bahare-ziba-3.jpg.webp" alt="" />
            </div>
            <div className="bg-gray-100 text-center w-[900px] h-auto  rounded-2xl border-box px-10 mt-10 mx-auto" >
                <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                <h2 className="text-xl font-normal mt-6  pb-10 px-20 text-center ">یک لبخند تو، بیابانی را دشت مجنون می کند مهربان من
                <br /> <span className="text-blue-600 font-bold mt-1">دوستت درام</span></h2>
            </div>
        </div>
    );
}
 
export default Poeticsentence;
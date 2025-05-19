import { FaQuoteRight } from "react-icons/fa";
export default function Text() {
  return (
          <div className="w-full  box-border px-[80px] py-10">
                <h2 className="mt-10 text-center mb-4 text-[#232323] font-semibold text-xl">متن عاشقانه فصل بهار</h2>
                <div className="bg-gray-100 text-center w-[900px] h-auto  rounded-2xl border-box px-10 mx-auto mt-10 pb-5" >
                    <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
                    <p className="text-xl font-normal px-3">چنان که یخ زده تقویم‌ها اگر هر روز</p>
                    <p className="text-xl font-normal px-3">هزار بار بیاید بهار، کافی نیست</p>
                    <p className="text-xl font-normal px-3">فاضل نظری</p>
                </div>
                 <div >
                       <div ><FaQuoteRight /></div>
                      <p >نهال بودم و در حسرتِ بهار! ولی</p>
                      <p >درخت می‌شوم و شوق برگ و بارم نیست</p>
                      <p>فاضل نظری</p>
                  </div>
        </div>
  )
}

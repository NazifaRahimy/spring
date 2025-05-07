import { FaQuoteRight } from "react-icons/fa";


export default function Home() {
  return (
    <div  className="w-full  box-border px-[80px] py-10 " >
        <div dir="rtl" className="w-[900px] mx-auto ">
        <h1 className="text-2xl mt-2 mb-4 font-semibold text-gray-500 "><span className=" text-[#232323] hover:text-blue-600 cursor-pointer ">روزانه</span>    » <span className=" text-[#232323] hover:text-blue-600 cursor-pointer "> متن و جمله</span></h1>
            <h2 className="mt-5 mb-4 text-[#232323] font-semibold text-xl">متن عاشقانه فصل بهار + جملات زیبا در وصف بهار و فصل سرسبزی</h2>
            <p className="font-normal text-lg">فصل بهار شروع زیبایی ها است و سرسبزی این فصل باعث نشاط و سرزندگی روحیه می شود. با فرا رسیدن فصل بهار خیلی از افراد خوشحال تر هستند زیرا رشد درختان و آواز پرندگان را می شنوند و هوا نیز بسیار لطیف است. در این فصل زیبا، گل ها به آرامی شکوفه می دهند و طبیعت بار دیگر نو می شود و لباس سبز به تن می کند. این فصل در روحیه انسان ها هم بسیار تاثیر می گذارد و حس عشق را در وجود انسان بیش از پیش می کند. به همین مناسبت زیباترین متن های عاشقانه ویژه فصل بهار را در ادامه گردآوری کرده ایم.</p>
        </div>
        <div className="w-full flex items-center justify-center  flex-col">
            <div className="w-[900px] h-[450px] rounded-[20px]  mt-10">
                <img className="w-[900px] h-[450px] rounded-[20px]" src="https://roozaneh.net/wp-content/uploads/2024/03/photo_2024-03-10_17-35-26.jpg.webp" alt="" />
            </div>
        </div>
        <h1 className="text-center my-10 text-xl font-bold">متن انگلیسی در مورد بهار</h1>
      <div  className="bg-gray-100 text-center w-[900px] h-auto  rounded-2xl border-box px-10 pb-4 mx-auto">
           <div className="  mx-auto  w-[150px] text-center bg-gray-100 shadow-blue-100 shadow-md rounded-br-full rounded-bl-full flex justify-center pb-4 pt-3  mb-5"><FaQuoteRight /></div>
           <h2 className="text-xl font-normal mt-10 px-3" >I glanced out the window at the signs of spring. The sky was almost blue, the trees were almost budding, the sun was almost bright .</h2>
           <h2 className="text-xl font-normal mt-5 px-3 mb-10" >به بیرون از پنجره، به نشانه های بهار نگریستم. آسمان تقریبا نیلگون بود، درختان تقریبا جوانه زده بودند، و خورشید تقریبا درخشان بود</h2>
      </div>
    
    </div>
  );
}

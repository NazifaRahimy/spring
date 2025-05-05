"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const nalLink =[
        {title: 'خانه', link:"/" },
        {title:'متن', link:"/text" },
        {title: 'جملات ادبی', link:"/poeticsentence"},
        {title: '  نوشته عکس', link:"/image"},
        {title: ' اشعار عاشقانه', link:"/poems" },
    ]

    const patname = usePathname();

    return ( 
        <div className="w-full h-20 bg-gray-200 flex items-center justify-center">
             <ul dir="rtl" className="flex items-center  justify-center space-x-6 text-2xl list-none cursor-pointer">
                  {
                    nalLink.map((item)=> (
                        <li ><Link className={patname === item.link ? "text-red-950" : 'text-[#232323]'}
                         href={item.link}> {item.title}</Link></li>
                    ))
                  }
             </ul>
        </div>
     );
}
 
export default NavBar;
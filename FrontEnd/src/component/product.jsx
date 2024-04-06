import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";
// import Info from './info'

export default function Product(props){
    const {name,image,price,category, open} = props
    return(
        <div className="group product w-fit h-fit p-4 flex flex-col gap-[3px] sm:gap-[6px] lg:gap-[10px] cursor-pointer overflow-hidden border border-black rounded-lg  brightness-100 transition-all duration-100 ease-linear hover:brightness-75 hover:transition-all hover:duration-100 hover:ease-linear hover:bg-slate-50">
            <img src={image} alt="" className={clsx(open ? "h-[38vh] sm:h-[24vh] lg:h-[13vh] " : "h-[38vh] sm:h-[24vh] lg:h-[12vh] ",'rounded-xl')}/>
            <div className={clsx(open ? "max-w-[38vw] sm:w-[24vw] lg:w-[13vw]" : "max-w-[38vw] sm:w-[24vw] lg:w-[12vw]" ,"p-name text-xs sm:text-sm lg:text-base font-light ")}>{name}</div>
            <div className={clsx(open ? "max-w-[38vw] sm:w-[24vw] lg:w-[10vw]" : "max-w-[38vw] sm:w-[24vw] lg:w-[12vw]" ,"price max-w-[38vw] sm:w-[24vw] lg:w-[13vw] text-sm sm:text-base lg:text-lg font-bold ")}>{price}</div>
        </div>
    )
}
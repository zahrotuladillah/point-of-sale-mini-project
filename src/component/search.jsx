import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import clsx from "clsx";

export default function SearchBox(){
    const [input, setInput] = useState("")
    const [focus, setFocus] = useState(false)
    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        setFocus(false)
    }
    return(
        <div className={clsx( focus ? "w-[90%]" : "" ,"searchbox py-[1vh] border border-solid border-black flex gap-2 rounded-lg items-center")}>
            <HiOutlineMagnifyingGlass className="ml-[1vw]" />
            <input type="text" value={input} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="Search our products"  className="w-[100%] border-none outline-none text-xs sm:text-sm lg:text-base mr-[1vw]"/>
        </div>
    )
}
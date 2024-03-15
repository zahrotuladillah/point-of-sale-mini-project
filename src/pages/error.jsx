import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ code, title }) {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/productlist")
  }
  return (
    <div className="w-100 h-100">
      <div className="mainErrorPage bg-[#151921] h-[100%] p-20">
        <Link to="/">
          {/* <FaHome style={{ fontSize: "30px", color: "#fffafa", opacity: "0.5" }} className="absolute left-10 top-5" /> */}
          <div className="text-white">Back</div>
        </Link>
        <div className="boxErrorPage lg:p-10 p-3 w-3/4 h-3/4 rounded-[50px] bg-[#151921]">
          <div className="flex flex-col items-center justify-center lg:p-5 py-5 gap-y-10">
            <h1 className="message text-center text-3xl text-[#d66d6d]">
              <b>{code} : </b> {title}
            </h1>
            <h1 className="message text-center text-xl text-white">we are sorry but the page you requested cannot be displayed by us</h1>
          </div>
        </div>
    </div>
    </div>
  );
}

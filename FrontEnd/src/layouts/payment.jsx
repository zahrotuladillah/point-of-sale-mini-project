import clsx from "clsx";
import { useState } from "react";

export default function Payment(props) {
  const {total, onSubmit} = props;
  const [paid, setPaid] = useState(0)
  let ret = paid - total;
  const handleFocus = () =>{
    if(paid==0){
      setPaid("")
    }
  }
  const handleBlur = () =>{
    if(paid==""){
      setPaid(0)
    }
  }
  
  return (
    <div className="max-w-[80%] h-[85vh] m-auto flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="w-fit mb-[5vh]">
          <div className="uppercase text-4xl font-semibold">Payment</div>
          <hr className="border-[3px] border-black" />
        </div>
        <div>
          <div>Total</div>
          <div>IDR {total}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="paid">Paid</label>
          <input id="paid" value={paid} onChange={(e)=>setPaid(Number(e.target.value))} onFocus={handleFocus} onBlur={handleBlur} className="outline p-2"></input>
        </div>
        <div>
          <div>Return</div>
          <div>{ret}</div>
        </div>
      </div>
      <button
        className={clsx(ret>-1?"bg-green text-gray-800":"bg-black text-white","rounded-lg p-2 text-lg font-bold self-center w-full")}
        onClick={()=>onSubmit(paid)}
      >
        PROCEED
      </button>
    </div>
  );
}

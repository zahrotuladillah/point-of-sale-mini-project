import { useState } from "react";
import SummaryCard from "../../component/summaryCard";
import Payment from "../../layouts/payment";
import clsx from "clsx";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from 'sweetalert2'

export default function SummaryDetail() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dataCart = useSelector((state) => state.cart.dataCart);
  const total = useSelector((state) => state.cart.total);

  const handleTotal = (tot) => {
    setTotal(tot);
  };

  const handleSubmit = async (paid) => {
    let transactionDetails = [];

    dataCart.forEach((data) => {
      transactionDetails.push({
        "tdQuantity": data.qty,
        "tdSubtotal": data.qty * data.pprice,
        "tdProductId": data.pid
      });
    });

    console.log(transactionDetails)
    let payload = {
      "ttotalAmount": total,
      "ttotalPay": paid,
      "transaction_details": transactionDetails
    };

    console.log(payload)
    axios
      .post("http://localhost:8080/saveTransaction", payload)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Data added!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
    navigate("/dashboard");
  };

  return (
    <div className="m-0 max-h-[100vh] py-10 flex">
      <div className="flex">
        <div className={clsx(open ? "w-[60vw]" : "w-[75vw]", "")}>
          <div className="w-[80%] m-auto flex">
            <div
              onClick={() => navigate("/dashboard")}
              className="mb-[4vh] p-2 border w-fit h-fit border-slate-400 rounded-lg hover:border-black cursor-pointer mr-4"
            >
              <HiArrowLongLeft size={25} />
            </div>
            <div className="w-full ">
              <div className="w-fit mb-[5vh]">
                <div className="uppercase text-4xl font-semibold">summary</div>
                <hr className="border-[3px] border-black" />
              </div>
              <div className="container flex flex-col gap-2 max-h-[75vh] overflow-y-auto">
                {dataCart.map((data) => (
                  <SummaryCard key={data.pid} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25vw] border-l border-l-black">
          <Payment total={total} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

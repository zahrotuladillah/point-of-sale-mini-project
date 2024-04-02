import { useState } from "react";
import SummaryCard from "../../component/summaryCard";
import Payment from "../../layouts/payment";
import clsx from "clsx";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function SummaryDetail() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const menu = [
    {
      id: 1,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 2,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 3,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 4,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 5,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 6,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 7,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 8,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 9,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
    {
      id: 10,
      name: "Classic Combo",
      image:
        "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      price: 30000,
      category: "foods",
    },
  ];

  return (
    <div className="m-0 max-h-[100vh] py-10 flex">
      <div className="flex">
        <div className={clsx(open ? "w-[60vw]" : "w-[75vw]", "")}>
          <div className="w-[80%] m-auto flex">
            <div onClick={()=>navigate("/dashboard")} className="mb-[4vh] p-2 border w-fit h-fit border-slate-400 rounded-lg hover:border-black cursor-pointer mr-4">
              <HiArrowLongLeft size={25} />
            </div>
            <div className="w-full ">
              <div className="w-fit mb-[5vh]">
                <div className="uppercase text-4xl font-semibold">summary</div>
                <hr className="border-[3px] border-black" />
              </div>
              <div className="container flex flex-col gap-2 max-h-[75vh] overflow-y-auto">
                {menu.map((data) => (
                  <SummaryCard key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25vw] border-l border-l-black">
          <Payment />
        </div>
      </div>
    </div>
  );
}

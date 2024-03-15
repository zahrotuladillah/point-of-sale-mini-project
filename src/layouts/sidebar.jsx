import { HiArrowLongLeft } from "react-icons/hi2";
import { CiShoppingTag } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import { RiPlayListAddLine } from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar(props) {
  const {loc, open, handleOpen} = props;
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "order",
      icon: <CiShoppingTag size={25}/>,
    },
    {
      id: 2,
      name: "history",
      icon: <VscHistory size={25} />,
    },
    {
      id: 3,
      name: "list product",
      icon: <CiViewList size={25} />,
    },
    {
      id: 4,
      name: "add product",
      icon: <RiPlayListAddLine size={25} />,
    },
    {
      id: 5,
      name: "list category",
      icon: <CiViewList size={25} />,
    },
    {
      id: 6,
      name: "Add category",
      icon: <RiPlayListAddLine size={25} />,
    },
  ]);

  return (
    <div className={open ? "block w-[15vw]" : "hidden"}>
      {console.log(menu)}
      <div onClick={()=>{handleOpen()}} className="mb-[4vh] p-2 border border-slate-400 rounded-lg w-fit hover:border-black cursor-pointer ml-auto mr-4">
        <HiArrowLongLeft size={25} />
      </div>
      <div>
        {menu.map((data) => (
          <div
            key={data.id}
            className={
              clsx(data.name === loc ? "!bg-slate-300" : "!bg-blue-400",
              "flex px-6 py-3 w-full gap-2 hover:bg-slate-200 cursor-pointer capitalize font-semibold")
            }
          >
            <div>{data.icon}</div>
            <div>{data.name}</div>
            {console.log(loc, data.name === loc)}
          </div>
        ))}
      </div>
    </div>
  );
}

import clsx from "clsx";
import { BsTrash3 } from "react-icons/bs";

export default function SummaryCard(props) {
  const { data } = props;
  return (
    <div className="rounded-lg flex justify-between p-4 border border-black">
      {/* <img src={data.pimage} alt="" className="w-40" /> */}
      <div
        className={clsx(
          open
            ? "h-[18vh] w-[14vw]"
            : "h-[18vh] w-[14vw] ",
          "rounded-xl"
        )}
      >
        <img src={data.pimage} alt="" className="h-full m-auto" />
      </div>
      <div className="w-[50%]">
        <div className="text-lg">{data.pname}</div>
        <div className="text-base font-bold">{data.pprice}</div>
      </div>
      <div className="w-[15%] text-end flex flex-col justify-between">
        <div className="text-base font-bold">X{data.qty}</div>
        <div className="font-bold text-2xl">{data.pprice * data.qty}</div>
      </div>
    </div>
  );
}

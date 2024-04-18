import { BsTrash3 } from "react-icons/bs";

export default function SummaryMiniCard(props) {
  const { data, onInc, onDec, onRemove } = props;
  return (
    <div className="rounded-lg flex justify-between p-4 border border-black">
      <div>
        <div className="text-base">{data.pname}</div>
        <div className="text-sm font-bold">{data.pprice}</div>
      </div>
      <div className="w-[45%]">
        <BsTrash3 onClick={()=>onRemove(data.pid)} className="float-end mb-8 cursor-pointer"/>
        <div className="flex h-fit w-[100%]">
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 py-1 px-2 rounded-l cursor-pointer"
            onClick={() => onDec(data.pid)}
          >
            −
          </button>
          <input
            className="border border-solid border-grey w-full rounded-md text-center"
            disabled
            type="number"
            name=""
            id=""
            value={data.qty}
          />
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 py-1 px-2 rounded-r cursor-pointer"
            onClick={() => onInc(data.pid)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

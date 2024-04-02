import { BsTrash3 } from "react-icons/bs";

export default function SummaryCard(props) {
  const { data } = props;
  const jml = 2
  return (
    <div className="rounded-lg flex justify-between p-4 border border-black">
        <img src={data.image} alt="" className="w-40"/>
      <div>
        <div className="text-base">{data.name}</div>
        <div className="text-sm font-bold">{data.price}</div>
      </div>
      <div className="w-[45%]">
        <div>{jml}</div>
        <div className="">
          {data.price*jml}
        </div>
      </div>
    </div>
  );
}

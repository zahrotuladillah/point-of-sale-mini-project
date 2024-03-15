import { useNavigate } from "react-router-dom";
import SummaryMiniCard from "../component/summaryMiniCard";

export default function Summary(props) {
  const { data } = props;
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/summary-detail")
  }
  return (
    <div className="max-w-[80%] m-auto">
      <div className="w-fit mb-[5vh]">
        <div className="uppercase text-4xl font-semibold">Summary</div>
        <hr className="border-[3px] border-black" />
      </div>
      {console.log(data)}
      <div className="container flex flex-col gap-2 max-h-[65vh] overflow-y-auto">
        {data.map((data) => (
          <SummaryMiniCard key={data.id} data={data} />
        ))}
      </div>
      <button
        className="mt-4 rounded-lg bg-black p-2 text-lg font-bold hover:bg-green text-white self-center w-full" onClick={handleSubmit}
      >
        PROCEED
      </button>
    </div>
  );
}

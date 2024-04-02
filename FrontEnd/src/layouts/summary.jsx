import { useNavigate } from "react-router-dom";
import SummaryMiniCard from "../component/summaryMiniCard";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeData } from "../store/reducers/cartSlice";

export default function Summary(props) {
  const {dataCart}= props
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/summary-detail")
  }
  const dispatch = useDispatch()
  
  const handleinc = (id) => dispatch(incrementQty(id));
  const handledec = (id) => dispatch(decrementQty(id));

  const handleRemove = (id) => dispatch(removeData(id));
  return (
    <div className="max-w-[80%] m-auto">
      {/* {console.log('cart',dataCart)} */}
      <div className="w-fit mb-[5vh]">
        <div className="uppercase text-4xl font-semibold">Summary</div>
        <hr className="border-[3px] border-black" />
      </div>
      {/* {console.log(data)} */}
      <div className="container flex flex-col gap-2 max-h-[65vh] overflow-y-auto">
        {dataCart?.map((data) => (
          <SummaryMiniCard key={data.id} data={data} onInc={handleinc} onDec={handledec} onRemove={handleRemove} />
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

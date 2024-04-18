import { useNavigate } from "react-router-dom";
import SummaryMiniCard from "../component/summaryMiniCard";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeData,
  countTotal,
} from "../store/reducers/cartSlice";
import clsx from "clsx";

export default function Summary(props) {
  const { dataCart } = props;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleinc = (id) => dispatch(incrementQty(id));
  const handledec = (id) => dispatch(decrementQty(id));

  const handleRemove = (id) => dispatch(removeData(id));

  const handleSubmit = () => {
    dispatch(countTotal());
    navigate("/detail-summary");
  };

  return (
    <div className="max-w-[80%] h-full m-auto relative">
      {/* {console.log('cart',dataCart)} */}
      <div className="w-fit mb-[5vh]">
        <div className="uppercase text-4xl font-semibold">Summary</div>
        <hr className="border-[3px] border-black" />
      </div>
      {/* {console.log(data)} */}
      <div className="container flex flex-col gap-2 max-h-[65vh] overflow-y-auto">
        {dataCart?.map((data) => (
          <SummaryMiniCard
            key={data.pid}
            data={data}
            onInc={handleinc}
            onDec={handledec}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <button
        className={clsx(
          dataCart.length > 0
            ? "bg-green text-gray-900"
            : "bg-black text-white",
          "font-semibold mt-4 rounded-lg p-2 text-lg font-boldself-center w-full absolute z-10 bottom-0"
        )}
        onClick={handleSubmit}
      >
        PROCEED
      </button>
    </div>
  );
}

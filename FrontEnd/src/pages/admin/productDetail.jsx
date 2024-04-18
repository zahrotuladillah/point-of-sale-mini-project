import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "../app.css";
import { HashLoader } from "react-spinners";
import DetailProduct from "../../component/detailProduct";
import { clsx } from "clsx";
import axios from "axios";
import useSWR from "swr";
// import { CheckoutContext } from "../../context/checkoutContext";
import { useDispatch } from "react-redux";
import { addDataCart } from "../../store/reducers/cartSlice";
import { HiArrowLongRight } from "react-icons/hi2";
import Sidebar from "../../layouts/sidebar";

export default function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("location", location.state.id);
  const param = useParams();
  // console.log(param," ",typeof(param))
  const [open, setOpen] = useState(true);

  const data = {
    id: 1,
    image:
      "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
    nama: "Combo Hemat",
    harga: 30000,
    category: 3,
  };

  // const { dataCheckout, setDataCheckout } = useContext(CheckoutContext);
  // const dispatch = useDispatch();

  // const [qty, setQty] = useState(1);
  // const [prod, setProd] = useState();
  // const [prev, setPrev] = useState();
  // const [size, setSize] = useState();
  // const [color, setColor] = useState();

  // const getProduct = (url) => axios.get(url).then((res) => res.data);

  // const { data, isLoading, error, mutate } = useSWR(
  //   `http://localhost:3000/product/${param.id}`,
  //   getProduct,
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //       setProd(data.dataPrev[0].dataPreview);
  //       setPrev(0);
  //       setColor(data.dataColor[0].name);
  //       setSize(data.dataSize[0]);
  //     },
  //   }
  // );

  // if (error) return alert(JSON.stringify(error));

  // if (!data) {
  //   return <HashLoader />;
  // }

  // const incrementQty = () => setQty(qty + 1);
  // const decrementQty = () => {
  //   if (qty > 2) {
  //     setQty(qty - 1);
  //   }
  // };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="m-0 max-h-[100vh] min-h-[100vh] py-10 flex">
      <div className="border-r border-r-black">
        <Sidebar open={open} handleOpen={handleOpen} />
      </div>
      <div className={clsx(open ? "w-[75vw]" : "w-[85vw]", "")}>
        <div className="w-[80%] m-auto flex">
          <div
            onClick={handleOpen}
            className={clsx(
              open ? "hidden" : "block",
              "mb-[4vh] p-2 border border-slate-400 rounded-lg w-fit h-fit hover:border-black cursor-pointer ml-auto mr-4"
            )}
          >
            <HiArrowLongRight size={25} />
          </div>
          <div className="max-w-[80%] m-auto mt-[2vh] mb-[5vh]">
            <div className="w-fit mb-[5vh]">
              <div className="uppercase text-4xl font-semibold">
                Product Detail
              </div>
              <hr className="border-[3px] border-orange" />
            </div>
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
              <div className="lg:max-w-[55%]">
                <figure className="w-[88%] p-0">
                  <img id="previewImage" src={data.image} alt="" />
                  <div className="break-all">{data.image}</div>
                </figure>
              </div>
              <div className="lg:max-w-[40%] flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <div className="text-xl md:text-2xl font-bold">
                    {data.nama}
                  </div>
                  <div className="text-xl md:text-2xl font-bold">
                    {data.harga}
                  </div>
                  <div className="flex">
                    <div>ID</div>
                    <div>: {data.id}</div>
                  </div>
                  <div className="flex">
                    <div>Category ID</div>
                    <div>: {data.category}</div>
                  </div>
                  <div className="flex">
                    <div>Category Name</div>
                    <div>: Foods</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

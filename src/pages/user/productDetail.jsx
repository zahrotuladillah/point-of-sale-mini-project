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

export default function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("location", location.state.id);
  const param = useParams();
  // console.log(param," ",typeof(param))

  // const { dataCheckout, setDataCheckout } = useContext(CheckoutContext);
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [prod, setProd] = useState();
  const [prev, setPrev] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const getProduct = (url) => axios.get(url).then((res) => res.data);

  const { data, isLoading, error, mutate } = useSWR(
    `http://localhost:3000/product/${param.id}`,
    getProduct,
    {
      onSuccess: (data) => {
        console.log(data);
        setProd(data.dataPrev[0].dataPreview);
        setPrev(0);
        setColor(data.dataColor[0].name);
        setSize(data.dataSize[0]);
      },
    }
  );

  if (error) return alert(JSON.stringify(error));

  const prevDef =
    "opacity-65 hover:opacity-100 border border-solid border-transparent hover:border-solid hover:border-gray-500 w-[60px] h-[60px] flex justify-center items-center cursor-pointer";
  const prevAct =
    "opacity-100 hover:opacity-100 border border-solid border-black hover:border-solid hover:border-gray-500 w-[60px] h-[60px] flex justify-center items-center cursor-pointer";
  const handlePrev = (preview, i) => {
    console.log(preview);
    setPrev(i);
    setProd(preview.dataPreview);
    setColor(preview.color);
  };

  const sizeDef =
    "sizeItem w-[37px] h-[37px] md:w-[45px] md:h-[45px] border-solid border-[2px] border-transparent hover:border hover:border-solid  hover:border-gray-500 rounded-[50%] flex items-center justify-center cursor-pointer";
  const sizeAct =
    "sizeItem w-[37px] h-[37px] md:w-[45px] md:h-[45px] border-solid border-[2px] border-gray-500 hover:border hover:border-solid  hover:border-gray-500 rounded-[50%] flex items-center justify-center cursor-pointer";
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const colorDef =
    "colorItem w-[37px] h-[37px] md:w-[45px] md:h-[45px] border-solid border-transparent border-[2px] hover:border hover:border-solid  hover:border-gray-500 rounded-[50%] flex items-center justify-center cursor-pointer";
  const colorAct =
    "colorItem w-[37px] h-[37px] md:w-[45px] md:h-[45px] border-solid border-gray-500 border-[2px] hover:border hover:border-solid  hover:border-gray-500 rounded-[50%] flex items-center justify-center cursor-pointer";
  const colorBtn =
    "w-[30px] md:w-[35px] rounded-[50%] border-solid border-[1pt] border-black aspect-square";
  const handleColor = (e, val) => {
    setColor(e.target.value);
    setProd(val);
    for (var key in data.dataPrev) {
      if (e.target.value == data.dataPrev[key].color) {
        setPrev(key);
        setProd(data.dataPrev[key].dataPreview);
        break;
      }
    }
  };

  if (!data) {
    return <HashLoader />;
  }

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 2) {
      setQty(qty - 1);
    }
  };

  const handleSubmit = () => {
    dispatch(addDataCart({data, qty, prod, color, size}));
    navigate("/cart");
  };

  return (
    <div className="m-0">
      {console.log("data ", data)}
      <ADS />
      <Navbar />
      <div className="max-w-[80%] m-auto mt-[2vh] mb-[5vh]">
        <Breadcrumb />
        <div className="text-xl md:text-3xl mb-6 font-bold">{data.name}</div>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="lg:max-w-[55%]">
            <div className="flex justify-between">
              {isLoading ? (
                <HashLoader />
              ) : (
                <ul
                  name=""
                  id="imageList"
                  className="flex flex-col gap-2 z-0 max-h-96 overflow-y-scroll overflow-x-hidden"
                >
                  {data.dataPrev?.map((preview, i) => (
                    <li key={i}>
                      <div className={prev == i ? prevAct : prevDef}>
                        <img
                          src={preview.dataPreview}
                          alt=""
                          width="50"
                          height="50"
                          onClick={() => handlePrev(preview, i)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <figure className="w-[88%] p-0">
                <img id="previewImage" src={prod} alt="" />
                <figcaption className="my-2 text-sm md:text-base">
                  Model 170cm Wearing size L
                </figcaption>
              </figure>
            </div>
            <DetailProduct />
          </div>
          <div className="lg:max-w-[40%] flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="text-base md:text-lg capitalize">
                COLOR : {color}
              </div>
              {isLoading ? (
                <HashLoader />
              ) : (
                <div id="colorList" className="flex space-x-2">
                  {data.dataColor?.map((col, i) => (
                    <div
                      key={i}
                      className={
                        color == col.name ? clsx(colorAct) : clsx(colorDef)
                      }
                    >
                      <button
                        className={clsx(colorBtn, col.hexCode)}
                        value={col.name}
                        onClick={(e) => handleColor(e, col.dataPreview)}
                      ></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-base md:text-lg capitalize">
                SIZE : {size}
              </div>
              {isLoading ? (
                <HashLoader />
              ) : (
                <div id="sizeList" className="flex space-x-2">
                  {data.dataSize?.map((datasize, i) => (
                    <div
                      key={i}
                      className={
                        size == datasize ? clsx(sizeAct) : clsx(sizeDef)
                      }
                    >
                      <button
                        className="w-[30px] md:w-[35px] leading-[30px] md:leading-[35px] text-sm md:text-base rounded-[50%] border-solid border-[1pt] border-black aspect-square text-center align-center"
                        value={datasize}
                        onClick={handleSize}
                      >
                        {datasize}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-[100%] md:w-[80%] border border-solid rounded-md border-black py-1 md:py-2 text-sm md:text-base text-center cursor-pointer hover:font-bold">
              SIZE CHART
            </div>
            <div className="text-xl md:text-2xl font-bold">{data.price}</div>
            <div className="flex flex-col space-y-2">
              <div className="text-base md:text-lg">Quantity</div>
              <div className="flex">
                <button
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none text-2xl font-thin"
                  onClick={decrementQty}
                >
                  −
                </button>
                <input
                  className="border border-solid border-grey rounded-md p-2 w-[20%] text-center"
                  disabled
                  type="number"
                  name=""
                  id=""
                  placeholder="1"
                  value={qty}
                />
                <button
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer text-2xl font-thin"
                  onClick={incrementQty}
                >
                  +
                </button>
              </div>
              <div className="text-sm md:text-base">Out of Stock</div>
              <div className="text-sm md:text-base">
                If the selected color size is out of stock, a restock
                notification is available.
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-black p-2 md:p-4 text-white rounded-lg cursor-pointer w-[100%] hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black text-base md:text-lg font-bold"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

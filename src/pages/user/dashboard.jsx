import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import Product from "../../component/product";
// import { products } from "../data/products";
import axios from "axios";
import useSWR from "swr";
import SearchBox from "../../component/search";
import { HashLoader } from "react-spinners";
import { createSearchParams } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";
import { BsFilterRight } from "react-icons/bs";
import Summary from "../../layouts/summary";
import Filter from "../../component/filter";
import clsx from "clsx";
import { HiArrowLongRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addDataCart } from "../../store/reducers/cartSlice";

function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("foods");
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false)
  const listFilter = ["foods", "snacks", "desserts", "beverages"];
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
  //   use react swr to fetch data
  //   const getProducts = (url) => axios.get(url).then((response) => response.data);

  //   const { data, isLoading, error, mutate } = useSWR(
  //     "http://localhost:3000/660/product",
  //     getProducts
  // {
  //     onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
  // }
  //   );

  //   if (error) return alert(JSON.stringify(erroroccured));

  // const [dataCart, setDataCart]= useState(useSelector((state) => state.cart.dataCart));
  const dataCart = useSelector((state) => state.cart.dataCart)
  // useEffect(()=>{
  //    setDataCart(useSelector((state) => state.cart.dataCart));
  // },[add])

  const handleAddCart = (data) => {
    console.log("add",data);
    const qty=1;
    dispatch(addDataCart({data,qty}));
    setAdd(!add)
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  //   useEffect(() => {
  //     if (data) {
  //       if (filter != "all") {
  //         const temp = data.filter((product) => product.category == filter);
  //         setProducts(temp);
  //       } else setProducts(data);
  //     }
  //   }, [filter]);

  //   if (!data) {
  //     return <HashLoader />;
  //   }

  //   if (!products && data) {
  //     console.log(data);

  //     setProducts(data);
  //   }

  return (
    <div className="m-0 max-h-[100vh] py-10 flex">
      <div className="border-r border-r-black">
        <Sidebar loc={"order"} open={open} handleOpen={handleOpen} />
      </div>
      <div className={clsx(open ? "w-[60vw]" : "w-[75vw]", "")}>
        <div className="flex">
          <div
            onClick={handleOpen}
            className={clsx(
              open ? "hidden" : "block",
              "mb-[4vh] p-2 border border-slate-400 rounded-lg w-fit h-fit hover:border-black cursor-pointer ml-auto mr-4"
            )}
          >
            <HiArrowLongRight size={25} />
          </div>
          <div className="max-w-[80%] m-auto">
            <div className="flex justify-between mb-[5vh]">
              <div>
                <div className="uppercase text-4xl font-semibold">{filter}</div>
                <hr className="border-[3px] border-orange" />
              </div>
              <div className="flex gap-3 h-full items-center !w-[80%] justify-end">
                <SearchBox />
                <BsFilterRight size={30} />
              </div>
            </div>
            <div
              className={clsx(
                open ? "grid-cols-3" : "grid-cols-4",
                "container m-auto grid gap-4 max-h-[70vh] overflow-y-auto py-4"
              )}
            >
              {menu?.map((data) => (
                <div key={data.id} onClick={() => handleAddCart(data)}>
                  <Product
                    name={data.name}
                    image={data.image}
                    price={data.price}
                    category={data.category}
                    open={open}
                  />
                </div>
              ))}
            </div>
            <div className="">
              <Filter
                list={listFilter}
                filter={filter}
                onChange={handleFilter}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25vw] border-l border-l-black">
        <Summary dataCart={dataCart}/>
      </div>
    </div>
  );
}

export default Dashboard;

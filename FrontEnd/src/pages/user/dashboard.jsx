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
import Category from "../../component/category";
import Filter from "../../component/filter";
import clsx from "clsx";
import { HiArrowLongRight, HiMiniArrowsUpDown } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addDataCart } from "../../store/reducers/cartSlice";

function Dashboard() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [listFilter, setListFilter] = useState([
    "all",
    "foods",
    "snacks",
    "desserts",
    "beverages",
  ]);
  // const menu = [
  //   {
  //     id: 1,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 2,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 3,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 4,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 5,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 6,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 7,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 8,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 9,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  //   {
  //     id: 10,
  //     name: "Classic Combo",
  //     image:
  //       "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
  //     price: 30000,
  //     category: "foods",
  //   },
  // ];
  //   use react swr to fetch data
  const [menu, setMenu] = useState([]);

  const getData = (url) => axios.get(url).then((response) => response.data);

  let categoryName = "";

  if (filter !== "all") {
    categoryName = filter;
  }
  const { data, isLoading, error, mutate } = useSWR(
    `http://localhost:8080/getProductFiltered?name=${search}&categoryName=${categoryName}&sortBy=${sortBy}&sortDirection=${sort}`,
    getData,
    {
      onSuccess: (data) => setMenu(data.data),
      // onSuccess: (data) => console.log(data.data),
    }
  );
  if (error) return alert(JSON.stringify(error));
  // }, [search, filter, sortBy, sort]);
  const {
    data: dataFilter,
    isLoading: loadFilter,
    error: errFilter,
    mutate: mutateFilter,
  } = useSWR(`http://localhost:8080/getCategory`, getData, {
    onSuccess: (data) => setListFilter(data.data),
    // onSuccess: (data) => console.log(data.data),
  });
  if (error) return alert(JSON.stringify(error));

  const dataCart = useSelector((state) => state.cart.dataCart);

  const handleAddCart = (data) => {
    // console.log("add", data);
    const qty = 1;
    dispatch(addDataCart({ data, qty }));
    setAdd(!add);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSort = () => {
    setSort((prevSort) => {
      if (prevSort === "DESC") {
        return "ASC";
      } else if (prevSort === "ASC") {
        return "DESC";
      }
    });
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterSelection = (opt) => {
    // Tambahkan logika untuk menangani pemilihan filter atau penutupan Filter di sini
    setSortBy(opt);
    // console.log(opt)
    setSort("ASC");
    // console.log(sort)
    setShowFilter(false); // Tutup Filter setelah pemilihan filter
  };

  return (
    <div className="h-full w-full py-10 flex">
      <div className="border-r border-r-black">
        <Sidebar open={open} handleOpen={handleOpen} />
      </div>
      <div className={clsx(open ? "w-[60vw]" : "w-[75vw]", "")}>
        <div className="flex h-full">
          <div
            onClick={handleOpen}
            className={clsx(
              open ? "hidden" : "block",
              "mb-[4vh] p-2 border border-slate-400 rounded-lg w-fit h-fit hover:border-black cursor-pointer ml-auto mr-4"
            )}
          >
            <HiArrowLongRight size={25} />
          </div>
          <div className="w-[80%] m-auto h-full relative">
            <div className="flex justify-between mb-[5vh]">
              <div>
                <div className="uppercase text-4xl font-semibold">{filter}</div>
                <hr
                  className={clsx(
                    filter === "all"
                      ? "border-red"
                      : filter === "foods"
                      ? "border-orange"
                      : filter === "snacks"
                      ? "border-yellow"
                      : filter === "desserts"
                      ? "border-pink"
                      : filter === "beverages"
                      ? "border-blue"
                      : "",
                    "border-[3px]"
                  )}
                />
              </div>
              <div className="flex gap-3 h-full items-center !w-[80%] justify-end">
                <SearchBox search={search} onSearch={handleSearch} />
                <div className="relative">
                  <BsFilterRight
                    size={30}
                    className="cursor-pointer"
                    onClick={toggleFilter}
                  />
                  {showFilter && (
                    <div className="absolute top-full mt-2 right-0 z-10">
                      <div className="bg-white rounded-lg border-2">
                        <Filter onFilterSelection={handleFilterSelection} />
                      </div>
                    </div>
                  )}
                </div>
                <HiMiniArrowsUpDown
                  size={30}
                  onClick={handleSort}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div
              className={clsx(
                open ? "grid-cols-3" : "grid-cols-4",
                "container m-auto grid gap-4 max-h-[70vh] overflow-y-auto py-4"
              )}
            >
              {menu?.map((data) => (
                <div key={data.pid} onClick={() => handleAddCart(data)}>
                  <Product
                    name={data.pname}
                    image={data.pimage}
                    price={data.pprice}
                    category={data.pcategoryId}
                    open={open}
                  />
                </div>
              ))}
            </div>
            <div className="w-full flex gap-3 overflow-x-auto absolute bottom-0 container">
              <Category
                data={"all"}
                filter={filter}
                onChange={handleFilter}
              />
              {listFilter?.map((data) => (
                <Category
                  key={data.cid}
                  data={data.cname}
                  filter={filter}
                  onChange={handleFilter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25vw] border-l border-l-black">
        <Summary dataCart={dataCart} />
      </div>
    </div>
  );
}

export default Dashboard;

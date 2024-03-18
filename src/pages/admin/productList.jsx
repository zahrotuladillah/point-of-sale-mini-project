import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import Product from "../../component/product";
// import { products } from "../data/products";
import axios from "axios";
import useSWR from "swr";
import SearchBox from "../../component/search";
import { HashLoader } from "react-spinners";
import React, { Component } from "react";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import { createSearchParams } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("all");
  const data = [
    {
      id: 1,
      image: "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      nama: "Combo Hemat",
      harga: 30000,
      category: 3,
    },
    {
      id: 2,
      image: "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      nama: "Combo Hemat",
      harga: 30000,
      category: 3,
    },
    {
      id: 3,
      image: "https://files.kfcku.com/uploads/media/dummy/food/w_classic_combo_l.png",
      nama: "Combo Hemat",
      harga: 30000,
      category: 3,
    },
  ];

  // new DataTable('#example');

  const handleEdit = (id) => {
    console.log(id);
    // navigate(`/editproduct/${id}`, {
    //         state: {
    //             id: id,
    //         },
    //     }
    // )
    navigate("/update product");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   use react swr to fetch data
  // const getProducts = (url) => axios.get(url).then((response) => response.data);

  // const { data, isLoading, error, mutate } = useSWR(
  //         "http://localhost:3000/660/product",
  //         getProducts,
  // {
  //     onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
  // }
  // );

  // if (error) return alert(JSON.stringify(erroroccured));

  // const handleFilter = e =>{
  //     setFilter(e.target.value)
  // }

  // useEffect(() => {
  //     if (data) {
  //         if(filter!="all") {
  //             const temp = data.filter((product) => product.category == filter);
  //             setProducts(temp)
  //         }
  //         else setProducts(data)
  //     }
  // }, [filter]);

  // if (!data) {
  //     return <HashLoader />;
  // }

  const handleAdd = () => {
    navigate("/addproduct");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // axios.delete(`http://localhost:3000/product/${id}`).then(() => mutate());
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="m-0">
      {console.log(data)}
      <div className="content z-0 my-[4vh] max-w-[80%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh] ">
        <button
          onClick={handleAdd}
          className="p-4 text-lg font-semibold bg-second rounded-lg text-first hover:text-third hover:bg-first w-fit"
        >
          Add Product
        </button>
        {/* {isLoading ? <HashLoader/> :  */}
        <div className="products">
          <table
            id="example"
            className="table table-striped table-bordered pb-5 pt-2 !w-[100%]"
          >
            <thead>
              <tr>
                <th scope="col" className="fw-semibold text-center bg-first">
                  Image
                </th>
                <th scope="col" className="fw-semibold text-center bg-first">
                  Name
                </th>
                <th scope="col" className="fw-semibold text-center bg-first">
                  Price
                </th>
                <th scope="col" className="fw-semibold text-center bg-first">
                  Category
                </th>
                <th scope="col" className="fw-semibold text-center bg-first">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-center border border-solid border-t-first">
              {data?.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <img
                      src={prod.image}
                      alt=""
                      className="max-w-[5vw] m-auto"
                    />
                  </td>
                  <td>{prod.nama}</td>
                  <td>{prod.harga}</td>
                  <td>{prod.category}</td>
                  <td>
                    <div className="flex font-semibold justify-center gap-3">
                      <button
                        onClick={() => handleEdit(prod.id)}
                        className="m-0 p-0"
                      >
                        Edit
                      </button>
                      <div
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        className="flex flex-row align-middle gap-2 head cursor-pointer"
                      >
                        <button
                          onClick={() => handleDelete(prod.id)}
                          className="m-0 p-0"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {products?.map((products) => (
                        <div key={products.id} onClick={() => handleProduct(products.id)}>
                            <Product
                            key={products.id}
                            name={products.name}
                            image={products.image}
                            category={products.category}
                            price={products.price}
                            // onClick={() => console.log(products.id)}
                        />
                        </div>
                    ))} */}
        </div>
        {/* } */}
      </div>
    </div>
  );
}

export default ProductList;

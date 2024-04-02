import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";
import clsx from "clsx";
import { useState } from "react";

export default function TransactionDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("location", location.state.id);
  const param = useParams();
  // console.log(param," ",typeof(param))
  const [open, setOpen] = useState(true);

  const data = [
    {
      id: 1,
      nama: "Combo Hemat",
      harga: 30000,
      qty: 3,
      subtotal: 90000,
    },
    {
      id: 2,
      nama: "Combo Hemat",
      harga: 30000,
      qty: 3,
      subtotal: 90000,
    },
    {
      id: 3,
      nama: "Combo Hemat",
      harga: 30000,
      qty: 3,
      subtotal: 90000,
    },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="max-h-[100vh] min-h-[100vh]  py-10 flex">
      <div className="border-r border-r-black">
        <Sidebar loc={"order"} open={open} handleOpen={handleOpen} />
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
          <div className="w-full">
            <div className="w-fit mb-[5vh]">
              <div className="uppercase text-4xl font-semibold">
                Transaction Detail
              </div>
              <hr className="border-[3px] border-black" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div>ID Transaksi</div>
                <div>: </div>
              </div>
              <div className="flex">
                <div>Tanggal Transaksi</div>
                <div>: </div>
              </div>
              <div className="flex">
                <div>Total Harga</div>
                <div>: </div>
              </div>
              <div className="flex">
                <div>Total Bayar</div>
                <div>: </div>
              </div>
            </div>

            <table className="mt-[5vh] w-full text-center border border-solid border-black">
              <thead className="border border-solid border-black">
                <th>ID Produk</th>
                <th>Nama Produk</th>
                <th>Harga Satuan</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </thead>
              <tbody>
                {data?.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.nama}</td>
                    <td>{data.harga}</td>
                    <td>{data.qty}</td>
                    <td>{data.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { Tabulator } from "tabulator-tables"; // Correct import
import "tabulator-tables/dist/css/tabulator.min.css";
import Payment from "../../layouts/payment";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";
import clsx from "clsx";

export default function History() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [table, setTable] = useState(null);
  const transaction = [
    {
      id: 1,
      date: "2024-03-15",
      totalPrice: 90000,
      totalPaid: 10000,
      return: 10000,
    },
    {
      id: 2,
      date: "2024-03-15",
      totalPrice: 90000,
      totalPaid: 10000,
      return: 10000,
    },
    {
      id: 3,
      date: "2024-03-15",
      totalPrice: 90000,
      totalPaid: 10000,
      return: 10000,
    },
    {
      id: 4,
      date: "2024-03-15",
      totalPrice: 90000,
      totalPaid: 10000,
      return: 10000,
    },
  ];

  //   useEffect(() => {
  //     if (!table) {
  //       initializeTabulator();
  //     }
  //   }, [table]);

  //   const initializeTabulator = () => {
  //     const tabulator = new Tabulator("#history-table", {
  //       data: transaction,
  //       layout: "fitColumns",
  //       pagination: "local",
  //       paginationSize: 6,
  //       paginationSizeSelector: [3, 6, 8, 10],
  //       movableColumns: true,
  //       paginationCounter: "rows",
  //       columns: [
  //         { title: "Date", field: "date", sorter: "date" },
  //         { title: "Total Price", field: "totalPrice", sorter: "number" },
  //         { title: "Total Paid", field: "totalPaid", sorter: "number" },
  //         { title: "Action", field: "id", formatter: actionFormatter },
  //       ],
  //       rowClick: handleAction,
  //     });
  //     setTable(tabulator);
  //   };
  const handleDetail = (id) => {
    // console.log(id);
    // navigate(`/detail-transaction/${id}`, {
    //   state: {
    //     id: id,
    //   },
    // });
    navigate("/transaction-detail");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAction = (e, row) => {
    const id = row.getData().id;
    navigate(`/detail-transaction/${id}`);
  };

  const actionFormatter = () => {
    return (
      <button className="rounded-lg bg-slate-300 hover:bg-black">Detail</button>
    );
  };

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
          <div className="w-full">
            <div className="w-fit mb-[5vh]">
              <div className="uppercase text-4xl font-semibold">history</div>
              <hr className="border-[3px] border-black" />
            </div>
            <table className="w-full text-center border border-solid border-black">
              <thead className="border border-solid border-black">
                <th>Date</th>
                <th>Total Price</th>
                <th>Total Paid</th>
                <th>Action</th>
              </thead>
              <tbody>
                {transaction?.map((data) => (
                  <tr key={data.id}>
                    <td>{data.date}</td>
                    <td>{data.totalPrice}</td>
                    <td>{data.totalPaid}</td>
                    <td>
                      <button onClick={() => handleDetail(data.id)}>
                        Detail
                      </button>
                    </td>
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

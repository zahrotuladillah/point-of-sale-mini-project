import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clsx from "clsx";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Sidebar from "../../layouts/sidebar";

function AddCategory() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const schema = yup.object().shape({
    name: yup.string().required("Field Name is required"),
  });

  const [defaultValues, setDefaultVal] = useState({
    name: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmitForm = (data) => {
    // console.log("submit ", data);

    const payload = {
      cname: data.name,
    };

    axios
      .post("http://localhost:8080/saveCategory", payload)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Data added!",
          icon: "success",
        });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
    navigate("/list-category");
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
              <div className="uppercase text-4xl font-semibold">
                add category
              </div>
              <hr className="border-[3px] border-black" />
            </div>
            <form
              className="flex flex-col gap-4 mt-4"
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div>
                <label htmlFor="name">Name</label>
                <input
                  placeholder="Name"
                  className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                  {...register("name")}
                  id="name"
                />
                <p className="error text-red-500">{errors.name?.message}</p>
              </div>

              <button
                className="mt-4 rounded-lg bg-first p-3 text-xl font-bold hover:bg-yellow-600 text-white self-center w-full"
                type="submit"
              >
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;

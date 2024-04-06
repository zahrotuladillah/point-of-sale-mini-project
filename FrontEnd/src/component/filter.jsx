import clsx from "clsx";

export default function Filter(props) {
  const { data, filter, onChange } = props;
  return (
    <div
      className={clsx(
        data === "all"
          ? "bg-red"
          : data === "foods"
          ? "bg-orange"
          : data === "snacks"
          ? "bg-yellow"
          : data === "desserts"
          ? "bg-pink"
          : data === "beverages"
          ? "bg-blue"
          : "",
        "p-3 rounded-lg uppercase font-semibold text-center hover:border-2 hover:border-slate-400 cursor-pointer w-[5000px]",
        data === filter ? "!border-[3px] !border-black hover:!border-black" : ""
      )}
      onClick={()=>onChange(data)}
    >
      {data}
    </div>
  );
}

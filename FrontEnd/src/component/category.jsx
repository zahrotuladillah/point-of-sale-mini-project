import clsx from "clsx";

export default function Category(props) {
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
          : "bg-green",
        "p-3 rounded-lg uppercase font-semibold text-center hover:border-2 hover:border-slate-400 cursor-pointer text-black",
        data === filter ? "!border-[3px] !border-black hover:!border-black" : ""
      )}
      onClick={()=>onChange(data)}
      style={{ flex: "0 0 10vw" }}
    >
      {data}
    </div>
  );
}

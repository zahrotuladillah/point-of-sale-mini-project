import clsx from "clsx";

export default function Filter(props) {
  const { list, filter, onChange } = props;
  return (
    <div className="max-w-[60vw] flex gap-3 overflow-x-auto">
      {/* {console.log(filter)} */}
      {list?.map((data, idx) => (
        <div
          key={idx}
          className={clsx(
            data === "foods"
              ? "bg-orange"
              : data === "snacks"
              ? "bg-yellow"
              : data === "desserts"
              ? "bg-pink"
              : data === "beverages"
              ? "bg-blue"
              : "",
            "p-3 rounded-lg uppercase font-semibold text-center hover:border-2 hover:border-slate-400 cursor-pointer w-[5000px]",
            data===filter ? "!border-[3px] !border-black hover:!border-black" : ""
          )}
        >
          {data}
        </div>
      ))}
    </div>
  );
}

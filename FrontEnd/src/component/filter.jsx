export default function Filter({ onFilterSelection }) {
  const filterOptions = [
    { id: 1, display: "name", code: "pName" },
    { id: 2, display: "price", code: "pPrice" },
  ];
  return (
    <div className="bg-white rounded-lg border w-fit h-fit">
      {filterOptions.map((option) => (
        <div
          key={option.id}
          className="py-3 px-8 cursor-pointer capitalize bg-white hover:bg-slate-300"
          onClick={() => onFilterSelection(option.code)}
        >
          {option.display}
        </div>
      ))}
    </div>
  );
}

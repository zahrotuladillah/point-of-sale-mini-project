export default function Payment() {
  const total = 90000;
  const paid = 100000;
  let ret = paid - total;
  return (
    <div className="max-w-[80%] h-[85vh] m-auto flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="w-fit mb-[5vh]">
          <div className="uppercase text-4xl font-semibold">Payment</div>
          <hr className="border-[3px] border-black" />
        </div>
        <div>
          <div>Total</div>
          <div>IDR {total}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="paid">Paid</label>
          <input id="paid" value={paid} className="outline p-2"></input>
        </div>
        <div>
          <div>Return</div>
          <div>{ret}</div>
        </div>
      </div>
      <button
        className="rounded-lg bg-black p-2 text-lg font-bold hover:bg-green text-white self-center w-full"
        type="submit"
      >
        PROCEED
      </button>
    </div>
  );
}

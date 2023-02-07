import { useRouter } from "next/router";
import { useRef } from "react";
function EventSearch({ props }: { prpos: any }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    const searchYear = yearInputRef.current.value;
    const searchMonth = monthInputRef.current.value;
    props.onSearch(searchYear, searchMonth);
  };
  return (
    <form onSubmit={handleClick}>
      <div className="flex justify-center items-center bg-white rounded py-2 px-5 gap-5 shadow-xl text-xl font-bold">
        <div className="flex justify-center items-center gap-3">
          <label htmlFor="year">Year</label>
          <select
            name="year"
            id="year"
            ref={yearInputRef}
            className="border rounded border-gray-600 w-40 px-2 py-1"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-3">
          <label htmlFor="month">Month</label>
          <select
            name="month"
            id="month"
            ref={monthInputRef}
            className="border rounded border-gray-600 w-40 py-1 px-2"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">Augest</option>
            <option value="9">Septemer</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-700 py-1 px-2 text-white rounded"
        >
          Find Event
        </button>
      </div>
    </form>
  );
}
export default EventSearch;

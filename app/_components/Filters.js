import Filter from "./Filter";

function Filters() {
  return (
    <div className="mx-auto flex max-w-[20.4375rem] justify-between gap-4 rounded-[5px] bg-white p-5">
      <div className="flex flex-wrap gap-4">
        <Filter>Frontend</Filter>
        <Filter>CSS</Filter>
        <Filter>Javascript</Filter>
      </div>
      <button>Clear</button>
    </div>
  );
}

export default Filters;

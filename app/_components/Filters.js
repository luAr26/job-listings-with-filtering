import Filter from "./Filter";

function Filters() {
  return (
    <div className="shadow-filters flex justify-between gap-4 rounded-[5px] bg-white p-5">
      <div className="flex flex-wrap gap-4">
        <Filter>Frontend</Filter>
        <Filter>CSS</Filter>
        <Filter>Javascript</Filter>
        <Filter>React</Filter>
        <Filter>Angular</Filter>
      </div>
      <button>Clear</button>
    </div>
  );
}

export default Filters;

import Filter from "./Filter";

function Filters() {
  return (
    <div className="shadow-main flex justify-between gap-4 rounded-[5px] bg-white p-5">
      <div className="flex flex-wrap gap-4">
        <Filter>Frontend</Filter>
        <Filter>CSS</Filter>
        <Filter>Javascript</Filter>
        <Filter>React</Filter>
        <Filter>Angular</Filter>
      </div>
      <button className="hover:text-primary hover:underline">Clear</button>
    </div>
  );
}

export default Filters;

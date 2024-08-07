import Filter from "./Filter";

function Filters({ filters, setFilters }) {
  if (filters.length === 0) return null;
  const handleClick = () => {
    setFilters([]);
    localStorage.removeItem("filters");
  };
  return (
    <div className="flex justify-between gap-4 rounded-[5px] bg-white p-5 shadow-main">
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <Filter key={filter} setFilters={setFilters}>
            {filter}
          </Filter>
        ))}
      </div>
      <button
        className="hover:text-primary hover:underline"
        onClick={handleClick}
      >
        Clear
      </button>
    </div>
  );
}

export default Filters;

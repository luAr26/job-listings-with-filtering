import { CgClose } from "react-icons/cg";

function Filter({ children, setFilters }) {
  return (
    <div className="inline-flex items-center gap-[11px] overflow-hidden rounded-[4px] bg-primary-10 bg-opacity-10 pl-2 text-[1rem] leading-[1.5] text-primary">
      {children}
      <span
        className="flex h-[2em] w-[2em] cursor-pointer items-center justify-center bg-primary text-white hover:bg-tertiary"
        role="button"
        onClick={() =>
          setFilters((prev) => prev.filter((filter) => filter !== children))
        }
      >
        <CgClose width={13.44} height={13.44} />
      </span>
    </div>
  );
}

export default Filter;

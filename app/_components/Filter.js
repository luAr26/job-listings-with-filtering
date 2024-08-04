import { CgClose } from "react-icons/cg";

function Filter({ children }) {
  return (
    <div className="bg-primary-10 text-primary inline-flex items-center gap-[11px] overflow-hidden rounded-[4px] bg-opacity-10 pl-2 text-[1rem] leading-[1.5]">
      {children}
      <span
        className="bg-primary flex h-[2em] w-[2em] cursor-pointer items-center justify-center text-white"
        role="button"
      >
        <CgClose width={13.44} height={13.44} />
      </span>
    </div>
  );
}

export default Filter;

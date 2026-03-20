function Btn({ children, onClick }) {
  return (
    <div className="relative overflow-hidden group rounded-full hover:px-5 transition-all duration-300">
      {/* <button className="h-full z-2 group-hover:left-0 transition-all duration-300 absolute bg-violet-400 w-full -left-full"></button> */}
      <button
        onClick={onClick}
        className="w-full bg-neutral-800 group-hover:bg-neutral-100 rounded-full shadow-xs py-2 transition-all duration-300"
      >
        <span className="transition-all duration-300 text-violet-100 group-hover:text-violet-800">
          {children}
        </span>
      </button>
    </div>
  );
}

export default Btn;

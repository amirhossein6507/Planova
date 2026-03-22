function Btn({ children, onClick, type, className = "" }) {
  let styleBtn;
  let styleContainer;

  switch (type) {
    case "primry":
      {
        styleBtn =
          "w-full text bg-violet-600 group-hover:bg-violet-500 rounded-full shadow-xs py-1 px-3 text-[14px] transition-all duration-300 text-violet-50";
        styleContainer = "group rounded-full transition-all duration-300";
      }
      break;
    default: {
      styleBtn =
        "w-full bg-neutral-800 group-hover:bg-neutral-100 rounded-full shadow-xs py-2 transition-all duration-300 text-violet-100 group-hover:text-violet-800";
      styleContainer =
        "relative overflow-hidden group rounded-full hover:px-5 transition-all duration-300";
    }
  }

  return (
    <div className={`${styleContainer} ${className}`}>
      {/* <button className="h-full z-2 group-hover:left-0 transition-all duration-300 absolute bg-violet-400 w-full -left-full"></button> */}
      <button onClick={onClick} className={styleBtn}>
        {children}
      </button>
    </div>
  );
}

export default Btn;

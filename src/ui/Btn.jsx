import { Link } from "react-router";

function Btn({ children, onClick, type, className = "", to }) {
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

    case "black":
      {
        styleBtn =
          "w-full bg-neutral-800 group-hover:bg-neutral-100 rounded-full shadow-xs py-2 transition-all duration-300 text-violet-100 group-hover:text-violet-800";
        styleContainer =
          "relative overflow-hidden group rounded-full hover:px-5 transition-all duration-300";
      }
      break;

    case "violet":
      {
        styleBtn =
          "w-full bg-violet-500 group-hover:bg-violet-200 rounded-full shadow-xs py-2 transition-all duration-300 text-violet-100 group-hover:text-violet-800";
        styleContainer =
          "relative overflow-hidden group rounded-full hover:px-5 transition-all duration-300";
      }
      break;
    default: {
      styleBtn =
        "w-full bg-transparent border border-black rounded-xl px-3 py-2 transition-all duration-300 text-black group-hover:bg-white/20";
      styleContainer = "w-fit group";
    }
  }

  if (to) {
    return (
      <div className={`${styleContainer} ${className}`}>
        <Link
          to={to}
          onClick={onClick}
          className={`${styleBtn} cursor-pointer inline-block text-center`}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styleContainer} ${className}`}>
      <button onClick={onClick} className={`${styleBtn} cursor-pointer`}>
        {children}
      </button>
    </div>
  );
}

export default Btn;

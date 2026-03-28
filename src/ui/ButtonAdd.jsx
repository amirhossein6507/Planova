import { Link } from "react-router";

function ButtonAdd({ link }) {
  return (
    <Link
      to={link}
      className="flex justify-center items-center gap-2 pl-3 pr-5 text-xl text-violet-600  fixed bottom-3 shadow-[0_0_5px_#7773] bg-violet-300/40 backdrop-blur-[2px] rounded-full h-10 right-[50%] translate-x-[50%] z-10 border border-violet-300/30 group transition-all hover:pl-6 duration-300"
    >
      <span className="">+</span>
      <span className="text-[13px] w-0 opacity-0 transition-all overflow-hidden group-hover:w-fit group-hover:opacity-100 duration-400">
        اضافه کردن
      </span>
    </Link>
  );
}

export default ButtonAdd;

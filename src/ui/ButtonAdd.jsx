import { Link } from "react-router";

function ButtonAdd({ link }) {
  return (
    <Link
      to={link}
      className="flex justify-center items-center text-2xl text-violet-600  fixed bottom-3 shadow-[0_0_5px_#7773] bg-violet-300/40 backdrop-blur-[2px] rounded-full w-10 h-10 right-[50%] translate-x-[50%] border border-violet-300/30"
    >
      <span className="">+</span>
    </Link>
  );
}

export default ButtonAdd;

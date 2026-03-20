import { Link } from "react-router";

function ButtonAdd({ link }) {
  return (
    <Link
      to={link}
      className="flex justify-center items-center text-2xl text-[#d0f]  fixed bottom-5 shadow-[0_0_10px_#5555] bg-white rounded-full w-10 h-10 right-[50%] translate-x-[50%]"
    >
      <span className="">+</span>
    </Link>
  );
}

export default ButtonAdd;

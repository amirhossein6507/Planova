import { createPortal } from "react-dom";
import { useNavigate } from "react-router";

function ButtonBack({ link = "/home" }) {
  const navigate = useNavigate();
  return createPortal(
    <button
      onClick={() => navigate(`${link}`)}
      className="flex justify-center items-center text-2xl absolute top-4 left-4 bg-white rounded-full w-9 h-9 shadow-xs border border-neutral-300/30 text-neutral-500"
    >
      &larr;
    </button>,
    document.body,
  );
}

export default ButtonBack;

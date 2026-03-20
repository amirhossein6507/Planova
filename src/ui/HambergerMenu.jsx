import { Link } from "react-router";
import { useGoalsContext } from "../contexts/GoalsContext";
import styles from "./HambergerMenu.module.css";

function HambergerMenu() {
  const { isOpenMenu } = useGoalsContext();

  return (
    <div
      className={`absolute z-5 py-2 px-3 border-b right-0 left-0  border-neutral-400 bg-white shadow-md ${isOpenMenu ? `top-0 ${styles.animationOpenMenu}` : `-top-full ${styles.animationCloseMenu}`}`}
    >
      <h1 className="text-center text-[#d0f] text-xl py-4">MENU</h1>
      <ul className="flex flex-col gap-2.5 text-neutral-500 font-light text-[12px] divide-y divide-neutral-300/40">
        <li className="py-1">
          <Link to="/profile" className="block w-full hover:text-[#e0f]">
            پروفایل
          </Link>
        </li>
        <li className="py-1">
          <Link to="/chalenge" className="block w-full hover:text-[#e0f]">
            چالش
          </Link>
        </li>
        <li className="py-1">
          <Link to="/start-where" className="block w-full hover:text-[#e0f]">
            از کجا شروع کردی
          </Link>
        </li>
        <li className="py-1">
          <Link to="/archive" className="block w-full hover:text-[#e0f]">
            آرشیو
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HambergerMenu;

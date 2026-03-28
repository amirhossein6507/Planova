import { useGoalsContext } from "../../contexts/GoalsContext";
import styles from "./Home.module.css";
import HambergerMenu from "../HambergerMenu";
import { Link } from "react-router";

function Header() {
  const { isOpenMenu, dispatch } = useGoalsContext();
  return (
    <>
      <HambergerMenu />
      <header className="flex flex-row-reverse justify-between py-5 px-2 items-center z-20 relative">
        <Link
          to="/home"
          onClick={() => dispatch({ type: "ui/closeMenu" })}
          className="text-3xl pl-3 text-logo"
        >
          <span className="text-[#d0f] text-[32px]">P</span>lanova
        </Link>
        <button
          onClick={() => dispatch({ type: "ui/isOpenMenu" })}
          className={isOpenMenu ? styles.hambergerClose : styles.hambergerOpen}
        >
          <div></div>
        </button>
      </header>
    </>
  );
}

export default Header;

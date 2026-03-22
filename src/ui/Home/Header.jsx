import { useGoalsContext } from "../../contexts/GoalsContext";
import styles from "./Home.module.css";
import HambergerMenu from "../HambergerMenu";
import { Link } from "react-router";

function Header() {
  const { setIsOpenMenu, isOpenMenu } = useGoalsContext();
  return (
    <>
      <HambergerMenu />
      <header className="flex flex-row-reverse justify-between py-5 px-2 items-center z-20 relative">
        <Link
          to="/home"
          onClick={() => setIsOpenMenu(false)}
          className="text-3xl pl-3 text-logo"
        >
          <span className="text-[#d0f] text-[32px]">P</span>lanova
        </Link>
        <button
          onClick={() => setIsOpenMenu((cur) => !cur)}
          className={isOpenMenu ? styles.hambergerClose : styles.hambergerOpen}
        >
          <div></div>
        </button>
      </header>
    </>
  );
}

export default Header;

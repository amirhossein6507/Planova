import { useGoalsContext } from "../../contexts/GoalsContext";
import { Link, NavLink, Outlet } from "react-router";
import styles from "./Home.module.css";
import HambergerMenu from "../../ui/HambergerMenu";

function Home() {
  const { setIsOpenMenu, isOpenMenu } = useGoalsContext();

  return (
    <div className="w-full relative">
      <HambergerMenu />
      <header className="flex flex-row-reverse justify-between py-5 px-2 items-center z-20 relative">
        <h1 className="text-3xl pl-3">
          <span className="text-[#d0f]">P</span>lanova
        </h1>
        <button
          onClick={() => setIsOpenMenu((cur) => !cur)}
          className={isOpenMenu ? styles.hambergerClose : styles.hambergerOpen}
        >
          <div></div>
        </button>
      </header>
      <div className="px-2">
        <ul className="flex rounded-full shadow-[0_0_10px_#5b5b5b40]">
          <NavLink to="daily" className={`w-6/12 text-center py-1`}>
            Planova Daily
          </NavLink>
          <NavLink to="long-trem" className={`w-6/12 text-center py-1`}>
            Plonova Long
          </NavLink>
        </ul>
      </div>

      <div className="px-2 py-5">
        <div className="overflow-hidden shadow-[0_0_10px_#5b5b5b40] rounded-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;

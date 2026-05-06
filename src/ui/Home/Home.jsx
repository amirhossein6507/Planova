import { NavLink, Outlet } from "react-router";
import Header from "./Header";
import AppLayout from "../AppLayout";

function Home() {
  return (
    <AppLayout>
      <div className="w-full relative">
        <Header />
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
          <div className="overflow-hidden relative shadow-[0_0_10px_#5b5b5b40] rounded-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;

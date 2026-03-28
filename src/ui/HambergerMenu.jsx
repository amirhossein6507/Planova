import { Link } from "react-router";
import { useGoalsContext } from "../contexts/GoalsContext";

function HambergerMenu() {
  const { isOpenMenu, dispatch } = useGoalsContext();
  const itemList = [
    {
      text: "پروفایل",
      link: "/profile",
    },
    {
      text: "چالش",
      link: "/chalenge",
    },
    {
      text: "از کجا شروع کردی",
      link: "/start-where",
    },
    {
      text: "آرشیو",
      link: "/archive",
    },
  ];

  return (
    <div
      className={`absolute z-5 py-2 px-3 pb-4 border-b right-0 left-0  border-neutral-500 backdrop-blur-2xl backdrop-brightness-75 rounded-b-3xl opacity-0 ${isOpenMenu ? `top-0 ${"animationOpenMenu"}` : `-top-full ${"animationCloseMenu"}`}`}
    >
      {/* <h1 className="text-center text-[#d0f] text-xl py-4">MENU</h1> */}
      <ul className="flex flex-col pt-16 gap-2.5 text-neutral-50 font-light text-[12px] divide-y divide-neutral-50/20">
        {itemList.map((item) => {
          return (
            <li key={item.text} className="py-1">
              <Link
                to={item.link}
                onClick={() => dispatch({ type: "ui/closeMenu" })}
                className="block w-full transition-all hover:text-violet-200 font-bold text-[13px]"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HambergerMenu;

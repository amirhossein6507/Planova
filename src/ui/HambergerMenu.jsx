import { Link } from "react-router";
import { useGoalsContext } from "../contexts/GoalsContext";
import { BiDesktop } from "react-icons/bi";
import { ImInfo } from "react-icons/im";

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

      <div className="flex items-start justify-center py-2  gap-4 text-white ">
        <div className="center-content flex-col gap-1 cursor-pointer">
          <span
            className="w-10 h-10 bg-black/5
           rounded-full center-content"
          >
            <BiDesktop size={20} color="white" />
          </span>
          <span className="text-[10px] block w-12 text-center">
            افزودن به صفحه
          </span>
        </div>
        <div className="center-content flex-col gap-1">
          <span className="w-10 h-10 bg-black/5 backdrop-blur-md rounded-full center-content">
            <ImInfo size={20} color="white" />
          </span>
          <span className="text-[10px] block w-12 text-center"> درباره ما</span>
        </div>
      </div>
    </div>
  );
}

export default HambergerMenu;

import { useEffect, useState } from "react";
import ButtonAdd from "./ButtonAdd";
import { HiCalendarDateRange, HiOutlineClock } from "react-icons/hi2";
// import { useGoalsContext } from "../contexts/GoalsContext";

const formatDate = (date) => {
  return Intl.DateTimeFormat("fa", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(date);
};
const formatClock = (date) => {
  return Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(date);
};

function ListContainer({ children, linkBtnAddTask }) {
  // const { deleteAllDailyItem } = useGoalsContext();
  const [date] = useState(formatDate(new Date()));
  const [clock, setClock] = useState(formatClock(new Date()));

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setClock(formatClock(new Date()));
    }, 60000);

    return () => clearInterval(clockInterval);
  }, []);

  // if (clock == "00:03") {
  //   setDate(formatDate(new Date()));
  //   deleteAllDailyItem();
  // }

  return (
    <div className="relative translate-0 grid grid-rows-[auto,1fr]">
      <div className="absolute top-0 right-0 left-0 h-10 bg-linear-180 from-white to-transparent "></div>
      <div className="p-3 fixed right-1 left-1">
        <div className="flex justify-around rounded-full text-neutral-800 backdrop-grayscale-50 backdrop-blur-xs backdrop-brightness-98 p-1 border border-violet-400/30 bg-violet-400/30 z-100">
          <span className="flex items-center gap-1">
            {date}
            <HiCalendarDateRange size={20} />
          </span>
          <span className="flex items-center gap-1">
            {clock}
            <HiOutlineClock size={20} />
          </span>
        </div>
      </div>

      <div className="h-[78dvh] overflow-y-auto pt-13">{children}</div>

      <ButtonAdd link={linkBtnAddTask} />
      <div className="absolute h-8 bg-linear-to-t from-white to-[#fff0] to-96% bottom-0 right-0 left-0"></div>
    </div>
  );
}

export default ListContainer;

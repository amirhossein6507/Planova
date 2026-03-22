import { useEffect, useState } from "react";
import ButtonAdd from "./ButtonAdd";
import { useGoalsContext } from "../contexts/GoalsContext";

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
      <div className="p-3 fixed right-5 left-5">
        <div className="flex justify-around rounded-full text-neutral-800 backdrop-grayscale-50 backdrop-blur-xs backdrop-brightness-98 p-1 border border-violet-400/30 bg-violet-400/30 z-100">
          <span>{date}📅</span>
          <span>{clock}🕐</span>
        </div>
      </div>

      <div className="h-[78dvh] overflow-y-auto pt-13">{children}</div>

      <ButtonAdd link={linkBtnAddTask} />
    </div>
  );
}

export default ListContainer;

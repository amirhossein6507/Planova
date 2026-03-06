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
  const { deleteAllDailyItem } = useGoalsContext();
  const [date, setDate] = useState(formatDate(new Date()));
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
    <div className="relative">
      <div className="flex justify-around bg-[#d0f] text-white font-bold text-center p-1.5">
        <span>{date}📅</span>
        <span>{clock}🕐</span>
      </div>

      <div>{children}</div>

      <ButtonAdd link={linkBtnAddTask} />
    </div>
  );
}

export default ListContainer;

// import { useEffect, useState } from "react";

import { formatDate } from "../../utils/formatDate";

// function Timer({ timerValue, idTask }) {
//   const [currTime, setCurrTime] = useState(timerValue);

//   function formatTimer(minutes) {
//     const days = Math.floor(minutes / (60 * 24));

//     const hours = Math.floor((minutes % (60 * 24)) / 60);

//     const mins = minutes % 60;

//     return { days, hours, mins };
//   }

//   const { days, hours, mins } = formatTimer(currTime);

//   useEffect(() => {
//     const handleTimer = () => {
//       const newMins = mins - 1;
//       const getData = JSON.parse(localStorage.getItem("longTrem-goals"));
//       const getIndex = getData.findIndex((item) => item.id == idTask);

//       const newTimer = days * 24 * 60 + hours * 60 + newMins;

//       getData[getIndex].timer = newTimer;
//       setCurrTime(newTimer);

//       localStorage.setItem("longTrem-goals", JSON.stringify(getData));
//     };

//     const intervalId = setInterval(handleTimer, 60000);

//     return () => clearInterval(intervalId);
//   }, [mins, hours, days, idTask]);

//   return (
//     <span className="text-3xl font-light text-[#e0f]">
//       {days}:{hours}:{mins}
//     </span>
//   );
// }

// export default Timer;

function Timer({ endDate }) {
  const nowDay = formatDate(new Date()).split("-").join("");
  const end = endDate?.split("-").join("");

  const daysLeft = Number(end) - Number(nowDay);

  return (
    <span className="text-2xl font-light text-[#e0f]">
      {daysLeft > 0 && `${daysLeft} روز وقت داری`}
      {daysLeft == 0 && `روز آخرته`}
      {daysLeft < 0 && `وقتت تموم شده`}
    </span>
  );
}

export default Timer;

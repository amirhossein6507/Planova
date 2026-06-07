const formatDate = (date) => {
  const getDay = Intl.DateTimeFormat("en", {
    day: "2-digit",
  }).format(date);
  const getMonth = Intl.DateTimeFormat("en", {
    month: "2-digit",
  }).format(date);
  const getYear = Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(date);

  const dateFormated = `${getYear}${getMonth}${getDay}`;

  return dateFormated;
};

function Timer({ endDate }) {
  const nowDay = formatDate(new Date());
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

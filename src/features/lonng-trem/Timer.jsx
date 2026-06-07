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
  const targetDate = new Date(endDate);
  const today = new Date();

  const diffTime = targetDate - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <span className="text-2xl font-light text-[#e0f]">
      {daysLeft > 0 && `${daysLeft} روز وقت داری`}
      {daysLeft == 0 && `روز آخرته`}
      {daysLeft < 0 && `وقتت تموم شده`}
    </span>
  );
}

export default Timer;

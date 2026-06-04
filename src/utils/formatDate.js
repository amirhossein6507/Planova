export const formatDate = (date) => {
  const dateForemted = Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  return dateForemted.split("/").reverse().join("-");
};

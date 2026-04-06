import ButtonAdd from "../../ui/ButtonAdd";
import ListContainer from "../../ui/ListContainer";
import { useGoalsContext } from "../../contexts/GoalsContext";
import DailyItem from "./DailyItem";
import { useState } from "react";

function Daily() {
  const { dailyItem, complatedNum } = useGoalsContext();
  const [chooseCategory, setChooseCategory] = useState("all");

  const selectedCategory =
    chooseCategory == "all"
      ? dailyItem
      : dailyItem.filter((item) => item.category == chooseCategory);

  return (
    <>
      <ListContainer linkBtnAddTask="/add-daily">
        {dailyItem.length == 0 ? (
          <div className="flex justify-center items-center  p-10">
            هنور هدفی برای امروز نذاشتی🙄
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center px-4 py-2 backdrop-grayscale-50 backdrop-blur-xs backdrop-brightness-98  border border-violet-300/30 mx-3 rounded-2xl fixed right-1 left-1">
              <select
                className="select select-sm bg-violet-200/90 select-primary pr-7 w-5/12 rounded-full border-none outline-none backdrop-blur-2xl text-violet-900"
                onChange={(e) => setChooseCategory(e.target.value)}
                value={chooseCategory}
              >
                <option value="all">همه</option>
                <option value="work">کاری</option>
                <option value="study">درسی</option>
                <option value="personal">شخصی</option>
              </select>
              <p className="text-[14px]">
                {dailyItem.length === complatedNum
                  ? "امروزو ترکوندی👏"
                  : `
                ${complatedNum} از ${dailyItem.length} تارو انجام دادی😉
              `}
              </p>
            </div>
            <ul className="px-3 pt-14 pb-15 flex flex-col gap-2.5 ">
              {selectedCategory.map((item, index) => (
                <DailyItem goal={item} key={index} />
              ))}
            </ul>
          </>
        )}
      </ListContainer>
    </>
  );
}

export default Daily;

import ButtonAdd from "../ButtonAdd";
import ListContainer from "../ListContainer";
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
            <div className="flex justify-between items-center px-3 py-2">
              <select
                className="select select-sm select-primary w-5/12 rounded-full"
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
                ${complatedNum} تا از ${dailyItem.length} تارو انجام دادی😉
              `}
              </p>
            </div>
            <ul className="px-3 pt-2 pb-15 flex flex-col gap-2.5 ">
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

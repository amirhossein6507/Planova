import Input from "../../ui/Input";
import Btn from "../../ui/Btn";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useState } from "react";

function ChalengeItem({ day, dayOn, daysLength }) {
  const { dispatch } = useGoalsContext();
  const { numDay, chalengeItems } = day;

  const onItem = dayOn === numDay;
  const lastDay = daysLength !== numDay;
  const fristDay = numDay !== 1;

  const handleChangeStatus = (e, chalengeId) => {
    dispatch({
      type: "chalenge/changeStatus",
      payload: { id: chalengeId, currentDay: numDay },
    });
  };

  return (
    <li
      className={`flex items-start border border-[#7773] rounded-xl py-3 px-2 text-neutral-500 `}
    >
      <div className="flex flex-col text-neutral-400 justify-center items-center border-l border-[#d0f] pl-4  h-full">
        <span>روز</span>
        <span className="text-[#d0f] text-2xl">{numDay}</span>
      </div>
      <div className="flex flex-col w-full">
        <span className="bg-[#d0f] text-white px-2 w-fit">دسته بندی</span>

        <ul
          className={`pr-3 pt-1 ${onItem ? "" : "relative h-11 overflow-hidden"}`}
        >
          {chalengeItems.map((item, index) => {
            return (
              <li key={index}>
                <Input
                  type="checkbox"
                  lable={item.chalengeContent}
                  onChange={(e) => handleChangeStatus(e, item.chalengeId)}
                  checked={item.chalengeStatus}
                />
              </li>
            );
          })}
          {!onItem && (
            <div className="absolute inset-0 bg-linear-0 from-white/90 to-transparent"></div>
          )}
        </ul>

        {onItem && (
          <div className="flex justify-end gap-2 pt-2">
            {lastDay && (
              <Btn
                type="primry"
                onClick={() => dispatch({ type: "chalenge/goNextDay" })}
              >
                بریم روز بعد
              </Btn>
            )}
            {fristDay && (
              <Btn
                type="primry"
                onClick={() => dispatch({ type: "chalenge/forwardBack" })}
              >
                بریم روز قبل
              </Btn>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default ChalengeItem;

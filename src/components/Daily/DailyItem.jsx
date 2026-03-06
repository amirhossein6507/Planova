import { useState } from "react";
import { useGoalsContext } from "../../contexts/GoalsContext";

function DailyItem({ goal }) {
  const { deleteDailyGoal, changeStatusDaily } = useGoalsContext();
  const [text, setText] = useState(0);

  const handleChangeStatus = (id) => {
    changeStatusDaily(id);
  };

  return (
    <li
      className={`flex flex-row-reverse justify-between items-start border border-[#7773] rounded-xl p-2 text-neutral-500 `}
    >
      <div className={`w-9/12 ${goal.status ? "opacity-50 " : ""}`}>
        <h3
          className={`text-[15px] border-r-[#d0f] border-r pr-1 ${goal.status ? "line-through" : ""}`}
        >
          {goal.title}
        </h3>
        {goal.description && (
          <div className="flex items-start justify-between w-11/12">
            <p
              className={`text-[13px] text-right pt-1 w-full ${goal.id == text ? "text-expend" : "text-collaps"}`}
            >
              {goal.description}
            </p>
            <button
              onClick={() => setText((cur) => (cur != goal.id ? goal.id : 0))}
            >
              {text == goal.id ? "⬆️" : "⬇️"}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-15">
        <div className="flex justify-around w-full border border-neutral-400/50 rounded-full overflow-hidden">
          <input
            type="checkbox"
            name=""
            id=""
            checked={goal.status}
            onClick={() => handleChangeStatus(goal.id)}
          />
          <button
            onClick={() => deleteDailyGoal(goal.id)}
            className="text-[15px]"
          >
            🗑️
          </button>
        </div>
        <span
          className={`flex justify-center items-center text-[11px] bg-[#d0f] rounded-full text-white px-1 w-full ${goal.category == "none" ? "hidden" : ""}`}
        >
          {goal.category == "work" && "کاری"}
          {goal.category == "personal" && "شخصی"}
          {goal.category == "study" && "درسی"}
        </span>
      </div>
    </li>
  );
}

export default DailyItem;

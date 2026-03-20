import { useState } from "react";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { Link } from "react-router";

function DailyItem({ goal }) {
  const { id, title, description, category, status } = goal;
  const { deleteDailyGoal, changeStatusDaily } = useGoalsContext();
  const [expend, setExpend] = useState(0);

  const handleChangeStatus = (id) => {
    changeStatusDaily(id);
  };

  return (
    <li
      className={`flex flex-row-reverse justify-between items-start border border-[#7773] rounded-xl p-2 text-neutral-500 `}
    >
      <div className={`w-9/12 ${status ? "opacity-50 " : ""}`}>
        <div className="flex justify-between items-center">
          <h3
            className={`text-[15px] border-r-[#d0f] border-r pr-1 py-0.5 ${status ? "line-through" : ""}`}
          >
            {title}
          </h3>
          <Link to={`/edit-daily/${id}`} className="text-[13px]">
            ✏️
          </Link>
        </div>
        {goal.description && (
          <div className="flex items-start justify-between w-12/12">
            <p
              className={`text-[13px] text-right pt-1 w-full ${id == expend ? "text-expend" : "text-collaps"}`}
            >
              {description}
            </p>
            <button onClick={() => setExpend((cur) => (cur != id ? id : 0))}>
              {expend == id ? "⬆️" : "⬇️"}
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
            checked={status}
            onClick={() => handleChangeStatus(id)}
          />
          <button onClick={() => deleteDailyGoal(id)} className="text-[15px]">
            🗑️
          </button>
        </div>
        <span
          className={`flex justify-center items-center text-[11px] bg-[#d0f] rounded-full text-white px-1 w-full ${category == "none" ? "hidden" : ""}`}
        >
          {category == "work" && "کاری"}
          {category == "personal" && "شخصی"}
          {category == "study" && "درسی"}
        </span>
      </div>
    </li>
  );
}

export default DailyItem;

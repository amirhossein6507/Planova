import { useState } from "react";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { Link } from "react-router";
import { BiSolidPencil } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";

function DailyItem({ goal }) {
  const { id, title, description, category, status } = goal;
  const { dispatch } = useGoalsContext();
  const [expend, setExpend] = useState(0);

  const handleDeleteItem = () => {
    const result = window.confirm("مطمئنی که میخوای پاکش کنی؟");
    if (result) {
      dispatch({ type: "daily/deleteItem", payload: id });
    } else {
      return;
    }
  };

  return (
    <li
      className={`flex flex-row-reverse items-start justify-between rounded-xl border border-[#7773] p-2 text-neutral-500`}
    >
      <div className={`w-9/12 ${status ? "opacity-50 " : ""}`}>
        <div className="flex items-center justify-between">
          <h3
            className={`border-r border-r-[#d0f] py-0.5 pr-1 text-[15px] ${status ? "line-through" : ""}`}
          >
            {title}
          </h3>
          <Link to={`/edit-daily/${id}`} className="cursor-pointer text-[13px]">
            <BiSolidPencil size={15} />
          </Link>
        </div>
        {goal.description && (
          <div className="flex w-12/12 items-start justify-between">
            <p
              className={`w-full pt-1 text-right text-[13px] ${id == expend ? "text-expend" : "text-collaps"}`}
              style={{ whiteSpace: expend ? "pre-line" : "nowrap" }}
            >
              {description}
            </p>

            <button
              onClick={() => setExpend((cur) => (cur != id ? id : 0))}
              className="cursor-pointer"
            >
              {expend == id ? (
                <MdKeyboardArrowUp size={20} />
              ) : (
                <MdKeyboardArrowDown size={20} />
              )}
            </button>
          </div>
        )}
      </div>
      <div className="flex w-15 flex-col items-center justify-center gap-2">
        <div
          className={`flex w-full items-center justify-around overflow-hidden rounded-full border border-neutral-400/50 py-1 transition duration-300 ${goal.status ? "bg-emerald-300" : ""}`}
        >
          <input
            type="checkbox"
            name=""
            id=""
            checked={status}
            onClick={() =>
              dispatch({ type: "daily/changeStatus", payload: id })
            }
            className="checkbox h-4 w-4 border-violet-500 bg-white text-violet-500"
          />
          <button onClick={handleDeleteItem} className="text-[15px]">
            <FaTrash size={13} color="#dd5555" />
          </button>
        </div>
        <span
          className={`flex w-full items-center justify-center rounded-full bg-[#d0f] px-1 text-[11px] text-white ${category == "none" ? "hidden" : ""}`}
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

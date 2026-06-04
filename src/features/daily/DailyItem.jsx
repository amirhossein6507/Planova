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
      className={`flex flex-row-reverse justify-between items-start border border-[#7773] rounded-xl p-2 text-neutral-500 `}
    >
      <div className={`w-9/12 ${status ? "opacity-50 " : ""}`}>
        <div className="flex justify-between items-center">
          <h3
            className={`text-[15px] border-r-[#d0f] border-r pr-1 py-0.5 ${status ? "line-through" : ""}`}
          >
            {title}
          </h3>
          <Link to={`/edit-daily/${id}`} className="text-[13px] cursor-pointer">
            <BiSolidPencil size={15} />
          </Link>
        </div>
        {goal.description && (
          <div className="flex items-start justify-between w-12/12">
            <p
              className={`text-[13px] text-right pt-1 w-full ${id == expend ? "text-expend" : "text-collaps"}`}
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
      <div className="flex flex-col justify-center items-center gap-2 w-15">
        <div
          className={`flex justify-around items-center w-full border border-neutral-400/50 rounded-full overflow-hidden transition duration-300 py-1 ${goal.status ? "bg-emerald-300" : ""}`}
        >
          <input
            type="checkbox"
            name=""
            id=""
            checked={status}
            onClick={() =>
              dispatch({ type: "daily/changeStatus", payload: id })
            }
            className="checkbox  bg-white text-violet-500 border-violet-500 h-4 w-4"
          />
          <button onClick={handleDeleteItem} className="text-[15px]">
            <FaTrash size={13} color="#dd5555" />
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

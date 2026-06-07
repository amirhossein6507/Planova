import { Link } from "react-router";
import { useGoalsContext } from "../../contexts/GoalsContext";

function LongTremItem({ goals }) {
  const { dispatch } = useGoalsContext();
  return (
    <div className="flex justify-between overflow-hidden rounded-xl border border-[#7773] text-neutral-500">
      <Link to={`${goals.id}`} className="w-10/12 p-2 md:w-11/12">
        <div>
          <h3 className="text-collaps border-r border-r-[#d0f] py-1.5 pr-1 text-[17px]">
            {goals.title}
          </h3>
        </div>
      </Link>

      <div
        className={`center-content w-2/12 transition duration-300 md:w-1/12 ${goals.status ? "bg-emerald-300" : "bg-red-300"}`}
      >
        <input
          className="checkbox checkbox-sm md:checkbox-md border-violet-500 text-violet-500"
          type="checkbox"
          onChange={() =>
            dispatch({ type: "longTrem/changeStatus", payload: goals.id })
          }
          checked={goals.status}
        />
      </div>
    </div>
  );
}

export default LongTremItem;

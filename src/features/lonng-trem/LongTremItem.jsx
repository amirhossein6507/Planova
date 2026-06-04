import { Link } from "react-router";
import { useGoalsContext } from "../../contexts/GoalsContext";

function LongTremItem({ goals }) {
  const { dispatch } = useGoalsContext();
  return (
    <div className="flex justify-between overflow-hidden border border-[#7773] rounded-xl text-neutral-500">
      <Link to={`${goals.id}`} className="w-10/12 md:w-11/12 p-2">
        <div>
          <h3 className="py-1.5 text-[17px] border-r-[#d0f] border-r pr-1 text-collaps">
            {goals.title}
          </h3>
        </div>
      </Link>

      <div
        className={`w-2/12 md:w-1/12 center-content transition duration-300 ${goals.status ? "bg-emerald-300" : "bg-red-300"}`}
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

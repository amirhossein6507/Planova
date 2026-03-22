import { Link } from "react-router";

function LongTremItem({ goals }) {
  return (
    <Link
      to={`${goals.id}`}
      className="flex justify-between border border-[#7773] rounded-xl p-2 text-neutral-500"
    >
      <div>
        <h3 className="py-1.5 text-[17px] border-r-[#d0f] border-r pr-1">
          {goals.title}
        </h3>
      </div>
      <div className="flex flex-col justify-center w-8">
        <div className="pt-1">
          <input type="checkbox" />
        </div>
      </div>
    </Link>
  );
}

export default LongTremItem;

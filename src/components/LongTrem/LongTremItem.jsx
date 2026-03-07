import { Link } from "react-router";

function LongTremItem({ goals }) {
  return (
    <Link
      to={`${goals.id}`}
      className="flex justify-between  relative border border-[#7773] rounded-xl p-2 text-neutral-500 overflow-hidden"
    >
      <div>
        <h3 className="py-1.5 text-[17px] border-r-[#d0f] border-r pr-1">
          {goals.title}
        </h3>
      </div>
      <div className="flex flex-col justify-center  w-8">
        <div className="flex justify-center items-start bg-[#b0f] text-white absolute top-0 bottom-0 left-0 ">
          <span className="rotate-270  block w-5.5 pt-0.5 pr-2.5 text-[15px]">
            {goals.timer}
          </span>
        </div>
        <div className="pt-1">
          <input type="checkbox" className="z-10" />
        </div>
      </div>
    </Link>
  );
}

export default LongTremItem;

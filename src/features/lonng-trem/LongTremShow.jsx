import { Link, useNavigate, useParams } from "react-router";
import ButtonBack from "../../ui/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useEffect, useState } from "react";
import Tools from "./Tools";
import Timer from "./Timer";

function LongTremShow() {
  const { id } = useParams();
  const { getDataLongGoal, dispatch } = useGoalsContext();
  const [goal, setGoal] = useState({});

  useEffect(() => {
    setGoal(getDataLongGoal(id));
  }, [getDataLongGoal, id]);

  const showStep = goal.steps?.length;

  return (
    <div className="relative p-4">
      <Link
        to="/home/long-trem"
        className="flex flex-row-reverse text-zinc-500"
      >
        back &larr;
      </Link>
      <div className="flex flex-col items-center justify-center gap-1">
        {goal.endDate && <Timer endDate={goal.endDate} />}
        <div className="flex gap-2">
          <span className="text-xl">{goal?.createDate}</span>
          {goal.endDate && (
            <>
              <span>&larr;</span>
              <span className="text-xl">{goal.endDate}</span>
            </>
          )}
        </div>
        <h2 className="py rounded-full border-2 border-purple-400 px-5 text-xl">
          {goal?.title}
        </h2>
        <h4
          className={`rounded-full bg-purple-400 px-5 py-0.5 text-white ${goal?.category == "none" ? "hidden opacity-0" : ""}`}
        >
          {goal?.category == "work" && "کاری"}
          {goal?.category == "study" && "درسی"}
          {goal?.category == "personal" && "شخصی"}
        </h4>
      </div>

      <div className="flex flex-col gap-4 pt-3">
        {goal.description && (
          <div className="border-r border-[#e0f] pr-2">
            <h4 className="text-neutral-500">توضیحات</h4>
            <p className="text-justify text-[13px] leading-6 text-neutral-400">
              {goal?.description}
            </p>
          </div>
        )}
        {showStep !== 0 && (
          <div className="border-r border-[#e0f] pr-2">
            <h4 className="text-neutral-500">قدم ها</h4>
            <ul className="list-disc pr-4 text-justify text-[13px] leading-6 text-neutral-400">
              {goal?.steps?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {goal.whyTarget && (
          <div className="border-r border-[#e0f] pr-2">
            <h4 className="text-neutral-500">چرا این هدف برات مهمه؟</h4>
            <p className="text-justify text-[13px] leading-6 text-neutral-400">
              {goal?.whyTarget}
            </p>
          </div>
        )}
      </div>
      <Tools handleDelete={dispatch} id={goal.id} />
    </div>
  );
}

export default LongTremShow;

import { useParams } from "react-router";
import ButtonBack from "../../components/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useEffect, useState } from "react";

function LongTremShow() {
  const { id } = useParams();
  const { getDataLongGoal } = useGoalsContext();
  const [goal, setGoal] = useState({});

  useEffect(() => {
    setGoal(getDataLongGoal(id));
  }, [getDataLongGoal, id]);

  console.log(goal);

  return (
    <div className="relative p-4">
      <ButtonBack link={"/home/long-trem"} />
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-3xl font-light text-[#e0f]">00:00:00</span>
        <span className="text-xl">{goal?.createDate}</span>
        <h2 className="px-5 py text-xl border-2  border-purple-400 rounded-full">
          {goal?.title}
        </h2>
        <h4
          className={`px-5 py-0.5 rounded-full bg-purple-400 text-white ${goal?.category == "none" ? "hidden opacity-0" : ""}`}
        >
          {goal?.category == "work" && "کاری"}
          {goal?.category == "study" && "درسی"}
          {goal?.category == "personal" && "شخصی"}
        </h4>
      </div>

      <div className="flex flex-col gap-4">
        <div className="border-r border-[#e0f] pr-2">
          <h4 className="text-neutral-500">توضیحات</h4>
          <p className="text-neutral-400 text-[13px] text-justify leading-6">
            {goal?.description}
          </p>
        </div>
        <div className="border-r border-[#e0f] pr-2">
          <h4 className="text-neutral-500">قدم ها</h4>
          <ul className="text-neutral-400 text-[13px] text-justify leading-6 list-disc pr-4">
            {goal?.steps?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border-r border-[#e0f] pr-2">
          <h4 className="text-neutral-500">چرا این هدف برات مهمه؟</h4>
          <p className="text-neutral-400 text-[13px] text-justify leading-6">
            {goal?.whyTarget}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LongTremShow;

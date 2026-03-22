import { useGoalsContext } from "../../contexts/GoalsContext";
import Header from "../../ui/Home/Header";
import ChalengeItem from "./ChalengeItem";
import CreateChalenge from "./CreateChalenge";

function Chalenge() {
  const { chalengeItem } = useGoalsContext();
  const { title, days, startDate, dayOn } = chalengeItem;

  if (Object.keys(chalengeItem).length === 0) return <CreateChalenge />;

  return (
    <div>
      <Header />
      <h2 className="text-center text-2xl text-violet-500">{title}</h2>
      <p className="text-center pt-2 text-neutral-400">{startDate}</p>
      <div>
        <ul className="space-y-3 p-4">
          {days.map((day) => {
            return <ChalengeItem day={day} dayOn={dayOn} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Chalenge;

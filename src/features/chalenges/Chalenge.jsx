import { useGoalsContext } from "../../contexts/GoalsContext";
import Btn from "../../ui/Btn";
import Header from "../../ui/Home/Header";
import ChalengeItem from "./ChalengeItem";
import CreateChalenge from "./CreateChalenge";

function Chalenge() {
  const { chalengeItem, dispatch } = useGoalsContext();
  const { title, days, startDate, dayOn } = chalengeItem;

  if (Object.keys(chalengeItem).length === 0) return <CreateChalenge />;

  return (
    <div className="relative">
      <Header />
      <h2 className="text-center text-2xl text-violet-500">{title}</h2>
      <p className="text-center pt-2 text-neutral-400">{startDate}</p>
      <div>
        <ul className="space-y-3 p-4">
          {days.map((day, index) => {
            return <ChalengeItem day={day} dayOn={dayOn} key={index} />;
          })}
        </ul>
      </div>

      <div className="flex m-5 mb-15 gap-4">
        <Btn
          onClick={() => dispatch({ type: "chalenge/ending" })}
          className=" grow"
        >
          اتمام چالش
        </Btn>
        <Btn
          onClick={() => dispatch({ type: "chalenge/ending" })}
          className=" grow"
        >
          تسلیم شدن
        </Btn>
      </div>
    </div>
  );
}

export default Chalenge;

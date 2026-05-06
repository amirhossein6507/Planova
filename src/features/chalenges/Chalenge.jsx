import { useGoalsContext } from "../../contexts/GoalsContext";
import AppLayout from "../../ui/AppLayout";
import Btn from "../../ui/Btn";
import Header from "../../ui/Home/Header";
import ChalengeItem from "./ChalengeItem";
import CreateChalenge from "./CreateChalenge";

function Chalenge() {
  const { chalengeItem, dispatch } = useGoalsContext();
  const { title, days, startDate, dayOn } = chalengeItem;

  const chalengItemLength = Object.keys(chalengeItem).length;
  const daysLength = days?.length;

  if (chalengItemLength == 0) return <CreateChalenge />;

  return (
    <AppLayout>
      <div className="relative">
        <Header />
        <h2 className="text-center text-2xl text-violet-500">{title}</h2>
        <p className="text-center pt-2 text-neutral-400">{startDate}</p>
        <div>
          <ul className="space-y-3 p-4">
            {days.map((day, index) => {
              return (
                <ChalengeItem
                  day={day}
                  dayOn={dayOn}
                  key={index}
                  daysLength={daysLength}
                />
              );
            })}
          </ul>
        </div>

        <div className="flex m-5 mb-15 gap-4">
          <Btn
            onClick={() =>
              dispatch({ type: "chalenge/ending", payload: "complate" })
            }
            className=" grow"
            type="violet"
          >
            اتمام چالش
          </Btn>
          <Btn
            onClick={() =>
              dispatch({ type: "chalenge/ending", payload: "brake" })
            }
            className=" grow"
            type="black"
          >
            تسلیم شدن
          </Btn>
        </div>
      </div>
    </AppLayout>
  );
}

export default Chalenge;

import ListContainer from "../../components/ListContainer";
import { useGoalsContext } from "../../contexts/GoalsContext";
import styles from "./LongTrem.module.css";
import LongTremItem from "./LongTremItem";

function LongTrem() {
  const { longTremItem } = useGoalsContext();

  return (
    <>
      <ListContainer linkBtnAddTask="/add-longTrem">
        <div className="p-2 ">
          <progress className={styles.progress} max={10} value={4} />
        </div>
        <ul className="px-3 pb-15 flex flex-col gap-2.5 ">
          {longTremItem.map((goals, index) => {
            return <LongTremItem goals={goals} key={index} />;
          })}
        </ul>
      </ListContainer>
    </>
  );
}

export default LongTrem;

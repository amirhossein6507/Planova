import ListContainer from "../../ui/ListContainer";
import { useGoalsContext } from "../../contexts/GoalsContext";
import styles from "./LongTrem.module.css";
import LongTremItem from "./LongTremItem";

function LongTrem() {
  const { longTremItem } = useGoalsContext();

  const compliteItems = longTremItem?.filter(
    (item) => item.status == true,
  ).length;

  return (
    <>
      <ListContainer linkBtnAddTask="/add-longTrem">
        {!longTremItem.length && (
          <h1 className="text-center py-15">هنوز هدف دراز مدتی نذاشتی😑</h1>
        )}
        {!!longTremItem.length && (
          <>
            <div className="p-2">
              <progress
                className={styles.progress}
                max={longTremItem.length}
                value={compliteItems}
              />
            </div>
            <ul className="px-3 pb-15 flex flex-col gap-2.5">
              {longTremItem.map((goals, index) => {
                return <LongTremItem goals={goals} key={index} />;
              })}
            </ul>
          </>
        )}
      </ListContainer>
    </>
  );
}

export default LongTrem;

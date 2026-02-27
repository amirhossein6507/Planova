import ListContainer from "../../components/ListContainer";
import styles from "./LongTrem.module.css";

function LongTrem() {
  return (
    <>
      <ListContainer linkBtnAddTask="add-longTrem">
        <div className="p-2 ">
          <progress className={styles.progress} max={10} value={4} />
        </div>
        <ul className="px-3 pb-15 flex flex-col gap-2.5 ">
          {Array.from({ length: 10 }, (_, index) => (
            <li
              key={index}
              className="flex flex-row-reverse justify-between  relative border border-[#7773] rounded-xl p-2 text-neutral-500 overflow-hidden"
            >
              <div>
                <h3 className="text-[15px] border-r-[#d0f] border-r pr-1">
                  عنوان
                </h3>
                <p className="text-[13px]">توضیحات به قد یک خط</p>
              </div>
              <div className="flex flex-col justify-center  w-8">
                <div className="flex justify-center items-end bg-[#b0f] text-white absolute top-0 bottom-0 left-0 ">
                  <span className="rotate-270  block w-5.5 pt-0.5 pl-1.5 text-[15px]">
                    10:10
                  </span>
                </div>
                <div className="pt-1">
                  <input type="checkbox" name="" id="" className="z-10" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ListContainer>
    </>
  );
}

export default LongTrem;

import ButtonAdd from "../../components/ButtonAdd";
import ListContainer from "../../components/ListContainer";

function Daily() {
  return (
    <>
      <ListContainer linkBtnAddTask="add-daily">
        <ul className="px-3 pt-2 pb-15 flex flex-col gap-2.5 ">
          {Array.from({ length: 10 }, (_, index) => (
            <li
              key={index}
              className="flex flex-row-reverse justify-between border border-[#7773] rounded-xl p-2 text-neutral-500"
            >
              <div>
                <h3 className="text-[15px] border-r-[#d0f] border-r pr-1">
                  عنوان
                </h3>
                <p className="text-[13px]">توضیحات به قد یک خط</p>
              </div>
              <input type="checkbox" name="" id="" />
            </li>
          ))}
        </ul>
      </ListContainer>
    </>
  );
}

export default Daily;

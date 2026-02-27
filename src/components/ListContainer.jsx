import ButtonAdd from "./ButtonAdd";

function ListContainer({ children, linkBtnAddTask }) {
  return (
    <div className="relative">
      <div className="flex justify-around bg-[#d0f] text-white font-bold text-center p-1.5">
        <span>📅1404/04/04</span>
      </div>

      <div>{children}</div>

      <ButtonAdd link={linkBtnAddTask} />
    </div>
  );
}

export default ListContainer;

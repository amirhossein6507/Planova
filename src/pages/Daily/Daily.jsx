function Daily() {
  return (
    <div>
      <div className="bg-[#d0f] text-white font-bold text-center p-1.5">
        📅1404/04/04
      </div>
      <ul className="p-3 flex flex-col gap-2.5">
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
    </div>
  );
}

export default Daily;

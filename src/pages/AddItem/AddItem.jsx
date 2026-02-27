function AddItem() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-red-300 w-11/12 px-2 py-5 rounded-2xl">
        <form action="" className="flex flex-col gap-3">
          <div className="w-full flex flex-row-reverse">
            <label className="w-6/12" htmlFor="">
              عنوان
            </label>
            <input className="input w-6/12 input-sm" type="text" />
          </div>
          <div className="w-full flex flex-row-reverse">
            <label className="w-6/12" htmlFor="">
              توضیحات
            </label>
            <input className="input w-6/12 input-sm" type="text" />
          </div>
          <div className="w-full flex flex-row-reverse">
            <label className="w-6/12" htmlFor="">
              تعین اهداف
            </label>
            <input className="input w-6/12 input-sm" type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;

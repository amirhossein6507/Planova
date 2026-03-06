import { useState } from "react";
import ButtonBack from "../../components/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate } from "react-router";

function AddItemLongTrem() {
  const { addDailyGoal } = useGoalsContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("حداقل باید یه عنوان بنویسی😑");
      return;
    }

    const newItem = {
      id: Math.random(),
      title,
      description,
      category,
      status: false,
    };

    addDailyGoal(newItem);

    navigate("/home");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ButtonBack link="/home/long-trem" />
      <div className="bg-linear-to-bl from-purple-500 to-fuchsia-500 w-11/12 px-3 py-5 rounded-3xl text-white text-[14px]">
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="w-full flex items-center">
            <label className="w-4/12" htmlFor="">
              عنوان
            </label>
            <input
              className="input w-8/12 input-sm text-neutral-500 rounded-full text-right"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full flex ">
            <label className="w-4/12" htmlFor="">
              توضیحات
            </label>
            <textarea
              className="input w-8/12 input-sm text-neutral-500 rounded-2xl h-15 text-right"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center flex-wrap">
            <label className="w-4/12" htmlFor="">
              قدم ها
            </label>
            <input
              className="input w-8/12 input-sm text-neutral-500 rounded-full text-right"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ul className="w-full list list-disc px-7 py-2 my-2 mx-3 border rounded-2xl">
              <li>قدم اول</li>
              <li>قدم اول</li>
              <li>قدم اول</li>
            </ul>
          </div>
          <div className="w-full flex items-center">
            <label className="w-4/12" htmlFor="">
              چرا این هدف مهمه
            </label>
            <input
              className="input w-8/12 input-sm text-neutral-500 rounded-full text-right"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex">
            <select
              className="select select-sm w-full text-neutral-500 rounded-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="none" selected>
                بدون دسته بندی
              </option>
              <option value="person">شخصی🙎</option>
              <option value="work">کاری🏢</option>
              <option value="study">درسی📚</option>
            </select>
          </div>

          <button className="btn btn-sm btn-info rounded-full bg-sky-400 text-white">
            اضافه کردن
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemLongTrem;

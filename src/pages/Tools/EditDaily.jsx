import { useEffect, useState } from "react";
import ButtonBack from "../../components/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate, useParams } from "react-router";

function EditDaily() {
  const { getDataDailyGoal, editDailyGoal } = useGoalsContext();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { title, description, category } = await getDataDailyGoal(id);
      setTitle(title);
      setDescription(description);
      setCategory(category);
    };
    getData();
  }, [getDataDailyGoal, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("حداقل باید یه عنوان بنویسی😑");
      return;
    }

    const newItem = {
      id,
      title,
      description,
      category,
      status: false,
    };

    editDailyGoal(newItem);

    navigate("/home");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ButtonBack />
      <div className="bg-linear-to-bl from-purple-500 to-fuchsia-500 w-11/12 px-3 py-5 rounded-3xl text-white text-[14px]">
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="w-full flex">
            <label className="w-4/12" htmlFor="">
              عنوان
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
            <label className="w-4/12" htmlFor="">
              توضیحات
            </label>
            <textarea
              className="input w-8/12 input-sm text-neutral-500 rounded-2xl h-20 text-right"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              <option value="personal">شخصی🙎</option>
              <option value="work">کاری🏢</option>
              <option value="study">درسی📚</option>
            </select>
          </div>

          <button className="btn btn-sm btn-info rounded-full bg-sky-400 text-white">
            ویرایش کردن
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDaily;

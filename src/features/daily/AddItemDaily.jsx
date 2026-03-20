import { useState } from "react";
import ButtonBack from "../../ui/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate } from "react-router";
import Btn from "../../ui/Btn";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { Selecte, Option } from "../../ui/Selecte";

function AddItemDaily() {
  const changeForm = true;
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

    console.log(newItem);

    addDailyGoal(newItem);

    navigate("/home");
  };

  if (changeForm)
    return (
      <div className="flex justify-center items-center h-screen">
        <ButtonBack />
        <Form className="mx-5" onSubmit={handleSubmit}>
          <Input lable="عنوان" onGetInput={setTitle} value={title} />

          <Input
            type="textarea"
            value={description}
            onGetInput={setDescription}
            lable="توضیحات"
            htmlFor="test"
            checked={true}
          />
          <Selecte title="بدون دسته بندی" onGetValue={setCategory}>
            <Option value="personal">شخصی🙎</Option>
            <Option value="work">کاری🏢</Option>
            <Option value="study">درسی📚</Option>
          </Selecte>

          <Btn>اضفافه کردن</Btn>
        </Form>
      </div>
    );

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
            اضافه کردن
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemDaily;

import { useState } from "react";
import ButtonBack from "../../ui/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate } from "react-router";
import Input from "../../ui/Input";

const formatDate = (date) => {
  const dateForemted = Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  return dateForemted.split("/").reverse().join("-");
};

function AddItemLongTrem() {
  const { dispatch } = useGoalsContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([]);
  const [whyTarget, setWhyTarget] = useState("");
  const [category, setCategory] = useState("none");
  const [createDate, setCreateDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState("");
  const [selectDateOption, setSelectDateOption] = useState("no-date");
  const [itemStep, setItemStep] = useState("");
  const navigate = useNavigate();

  const getTimer = () => {
    const starting = Number(createDate.split("-").join(""));
    const ending = Number(endDate.split("-").join(""));
    const ekhtelaf = ending - starting;
    const result = ekhtelaf * 24 * 60;
    return selectDateOption === "yes-date" ? result : 0;
  };

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
      timer: getTimer(),
      createDate,
      endDate: selectDateOption == "yes-date" ? endDate : "",
      whyTarget,
      steps,
      checked: false,
    };

    dispatch({ type: "longTrem/newItem", payload: newItem });

    navigate("/home/long-trem");
  };

  const handleEndDate = (e) => {
    const checkCreateDate = Number(createDate.split("-").join(""));
    const checkEndDate = Number(e.target.value.split("-").join(""));
    checkCreateDate >= checkEndDate
      ? alert("لطفا تاریخ پایان رو به درستی تنظیم کنید")
      : setEndDate(e.target.value);
  };

  const handleAddStep = () => {
    setSteps((cur) => [...cur, itemStep]);
    setItemStep("");
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
              className="input w-6/12 input-sm text-neutral-500 rounded-full text-right"
              type="text"
              value={itemStep}
              onChange={(e) => setItemStep(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddStep}
              className="w-2/12 btn btn-sm btn-info rounded-full text-white"
            >
              +
            </button>
            {steps.length !== 0 && (
              <ul className="w-full list list-disc px-7 py-2 my-2 mx-3 border rounded-2xl">
                {steps.map((item, index) => {
                  return (
                    <li key={index}>
                      {item}{" "}
                      <button
                        onClick={() =>
                          setSteps((cur) => cur.filter((elem) => elem !== item))
                        }
                      >
                        ❌
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="w-full flex items-center">
            <label className="w-4/12" htmlFor="">
              چرا این هدف مهمه
            </label>
            <input
              className="input w-8/12 input-sm text-neutral-500 rounded-full text-right"
              type="text"
              value={whyTarget}
              onChange={(e) => setWhyTarget(e.target.value)}
              required
            />
          </div>
          <div className="border border-white rounded-2xl p-2">
            <div className="flex gap-3 mb-3 bg-white rounded-full">
              <div className="bg-white rounded-full px-3 py-1 text-black flex justify-center items-center gap-1 w-4/12 text-[12px]">
                <input
                  type="radio"
                  id="no-date"
                  name="select-date-option"
                  className="radio radio-sm radio-success"
                  checked={selectDateOption == "no-date" ? true : false}
                  value="no-date"
                  onChange={(e) => setSelectDateOption(e.target.value)}
                />
                <label htmlFor="no-date">بدون تاریخ</label>
              </div>
              <div className="bg-white rounded-full px-3 py-1 text-black flex justify-center items-center gap-1 w-4/12 text-[12px]">
                <input
                  type="radio"
                  id="yes-date"
                  name="select-date-option"
                  className="radio radio-sm radio-success"
                  checked={selectDateOption == "yes-date" ? true : false}
                  value="yes-date"
                  onChange={(e) => setSelectDateOption(e.target.value)}
                />
                <label htmlFor="yes-date">با تاریخ</label>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <label htmlFor="">تاریخ شروع</label>
                <input
                  type="date"
                  className="input input-sm rounded-full grow text-neutral-500 mt-1"
                  value={createDate}
                  onChange={(e) => setCreateDate(e.target.value)}
                />
              </div>
              <div
                className={`${selectDateOption == "no-date" ? "opacity-70" : ""}`}
              >
                <label htmlFor="">تاریخ پایان</label>
                <input
                  type="date"
                  className="input input-sm rounded-full grow text-neutral-500 mt-1"
                  disabled={selectDateOption == "no-date" && true}
                  value={endDate}
                  min={createDate}
                  required
                  onChange={handleEndDate}
                />
              </div>
            </div>
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

          <button
            type="submit"
            className="btn btn-sm btn-info rounded-full bg-sky-400 text-white"
          >
            اضافه کردن
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemLongTrem;

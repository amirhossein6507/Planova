import { useState } from "react";
import ButtonBack from "../../ui/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate, useParams } from "react-router";
import Input from "../../ui/Input";
import { CgCloseO } from "react-icons/cg";
import { formatDate } from "../../utils/formatDate";
import Form from "../../ui/Form";
import Btn from "../../ui/Btn";
import { HiPlus } from "react-icons/hi2";
import { Option, Selecte } from "../../ui/Selecte";

function EditLongTrem() {
  const { getDataLongGoal } = useGoalsContext();
  const { longTremId } = useParams();

  const initialValue = getDataLongGoal(longTremId);
  const {
    title: initTitle,
    description: initDesc,
    steps: initSteps,
    whyTarget: initWhyTarget,
    createDate: initCreateDate,
    endDate: initEndDate,
    category: initCategory,
    timer,
  } = initialValue;

  const { dispatch } = useGoalsContext();
  const [title, setTitle] = useState(initTitle || "");
  const [description, setDescription] = useState(initDesc || "");
  const [steps, setSteps] = useState(initSteps || []);
  const [whyTarget, setWhyTarget] = useState(initWhyTarget || "");
  const [category, setCategory] = useState(initCategory || "none");
  const [createDate, setCreateDate] = useState(
    initCreateDate || formatDate(new Date()),
  );
  const [endDate, setEndDate] = useState(initEndDate || "");
  const [selectDateOption, setSelectDateOption] = useState(
    (timer && "yes-date") || "no-date",
  );
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
      id: longTremId,
      title,
      description,
      category,
      timer: getTimer(),
      createDate,
      endDate: selectDateOption == "yes-date" ? endDate : "",
      whyTarget,
      steps,
      status: false,
    };

    dispatch({ type: "longTrem/editItem", payload: newItem });

    navigate("/home/long-trem");
  };

  const handleEndDate = (e) => {
    const checkCreateDate = Number(createDate.split("-").join(""));
    const checkEndDate = Number(e.target.value.split("-").join(""));
    checkCreateDate >= checkEndDate
      ? alert("لطفا تاریخ پایان رو به درستی تنظیم کنید")
      : setEndDate(e.target.value);
  };

  const handleAddStep = (e) => {
    e.preventDefault();
    setSteps((cur) => [...cur, itemStep]);
    setItemStep("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ButtonBack link="/home/long-trem" />
      <Form action="" onSubmit={handleSubmit}>
        <Input lable="عنوان" type="text" value={title} onGetInput={setTitle} />

        <Input
          lable="توضیحات"
          type="textarea"
          value={description}
          onGetInput={setDescription}
        />

        <div className="flex flex-wrap items-center justify-between">
          <Input
            lable="قدم ها"
            className="w-9/12"
            type="text"
            value={itemStep}
            onGetInput={setItemStep}
          />
          <Btn type="violet" className="w-2/12" onClick={handleAddStep}>
            <HiPlus />
          </Btn>
          {steps.length !== 0 && (
            <ul className="bg-violet-100 w-full text-violet-600 py-2 px-4 rounded-2xl mt-3 mb-1">
              {steps.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-2">
                    {item}{" "}
                    <button
                      onClick={() =>
                        setSteps((cur) => cur.filter((elem) => elem !== item))
                      }
                    >
                      <CgCloseO size={17} color="#ee5555" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <Input
          lable="چرا این هدف مهمه"
          type="text"
          value={whyTarget}
          onGetInput={setWhyTarget}
        />

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
          <Selecte value={category} onGetValue={setCategory}>
            <Option value="none" selected>
              بدون دسته بندی
            </Option>
            <Option value="personal">شخصی🙎</Option>
            <Option value="work">کاری🏢</Option>
            <Option value="study">درسی📚</Option>
          </Selecte>
        </div>

        <Btn type="black">ویرایش کردن</Btn>
      </Form>
    </div>
  );
}

export default EditLongTrem;

import Header from "../../ui/Home/Header";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Btn from "../../ui/Btn";
import { useState } from "react";
import { useGoalsContext } from "../../contexts/GoalsContext";

function CreateChalenge() {
  const { dispatch } = useGoalsContext();
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState([]);
  const [chalengeItems, setChalengeItems] = useState([]);
  const [chalengeItem, setChalengeItem] = useState("");
  const [numDay, setNumDay] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      startDate,
      dayOn: 1,
      days,
    };

    dispatch({ type: "chalenge/adding", payload: newItem });
  };

  const handleAddDate = (e) => {
    e.preventDefault();
    const newDay = {
      numDay,
      chalengeItems,
    };

    setChalengeItems([]);
    setDays((cur) => [...cur, newDay]);
    setNumDay((cur) => ++cur);
  };

  return (
    <div className="h-dvh">
      <Header />
      <div className="h-10/12 flex justify-center items-center">
        <Form onSubmit={handleSubmit} title="چالشتو بنویس">
          <Input lable="اسم چالش" value={title} onGetInput={setTitle} />
          <input
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            className="input w-full rounded-2xl text-black"
          />
          <div className="bg-white/50 rounded-2xl p-3 space-y-3">
            <Input
              lable={`چالش روز ${numDay} بنویس`}
              value={chalengeItem}
              onGetInput={setChalengeItem}
            />
            <div className="flex gap-3">
              <Btn
                onClick={(e) => {
                  e.preventDefault();
                  setChalengeItems((cur) => [...cur, chalengeItem]);
                  setChalengeItem("");
                }}
                className="grow"
              >
                اضافه کن
              </Btn>
            </div>
            <ul className="bg-white p-3 rounded-xl text-black space-y-2">
              {chalengeItems.length != 0 && (
                <>
                  {chalengeItems.map((item, index) => (
                    <li key={index} className="border-r border-violet-500 pr-2">
                      {item}
                    </li>
                  ))}
                  <Btn onClick={handleAddDate} className="grow">
                    امروزو ذخیره کن
                  </Btn>
                </>
              )}

              {chalengeItems.length == 0 && (
                <p className="text-center py-2">
                  چالشای روز {numDay} تو بنویس😄
                </p>
              )}
            </ul>
          </div>

          <Btn>شروع کن چالشو</Btn>
        </Form>
      </div>
    </div>
  );
}

export default CreateChalenge;

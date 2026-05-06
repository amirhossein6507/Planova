import Header from "../../ui/Home/Header";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Btn from "../../ui/Btn";
import { useState } from "react";
import { useGoalsContext } from "../../contexts/GoalsContext";
import AppLayout from "../../ui/AppLayout";

function CreateChalenge() {
  const { dispatch } = useGoalsContext();
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState([]);
  const [chalengeItems, setChalengeItems] = useState([]);
  const [chalengeContent, setChalengeContent] = useState("");
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

  const handleAddChalengeItems = (e) => {
    e.preventDefault();

    const newItem = {
      chalengeId: Math.random(),
      chalengeContent: chalengeContent,
      chalengeStatus: false,
    };

    setChalengeItems((cur) => [...cur, newItem]);
    setChalengeContent("");
  };

  const handleDeleteChalengeItem = (id) => {
    setChalengeItems((cur) => cur.filter((item) => item.chalengeId !== id));
  };

  return (
    <AppLayout>
      <div className="h-dvh relative">
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
                value={chalengeContent}
                onGetInput={setChalengeContent}
              />
              <div className="flex gap-3">
                <Btn
                  type="black"
                  onClick={handleAddChalengeItems}
                  className="grow"
                >
                  اضافه کن
                </Btn>
              </div>
              <ul className="bg-white p-3 rounded-xl text-black space-y-2">
                {chalengeItems.length != 0 && (
                  <>
                    {chalengeItems.map((item) => (
                      <li
                        key={item.chalengeId}
                        className="border-r border-violet-500 pr-2"
                      >
                        {item.chalengeContent}
                        <button
                          onClick={() =>
                            handleDeleteChalengeItem(item.chalengeId)
                          }
                          className="mx-2 cursor-pointer"
                        >
                          ❌
                        </button>
                      </li>
                    ))}
                    <Btn type="black" onClick={handleAddDate} className="grow">
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

            <Btn type="black">شروع کن چالشو</Btn>
          </Form>
        </div>
      </div>
    </AppLayout>
  );
}

export default CreateChalenge;

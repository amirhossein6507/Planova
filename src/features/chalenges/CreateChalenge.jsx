import Header from "../../ui/Home/Header";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Btn from "../../ui/Btn";
import { useState } from "react";

function CreateChalenge() {
  const chalengeItem = ["زبان", "ری اکت", "فرندز"];
  const [numDay, setNumDay] = useState(1);

  return (
    <div className="h-dvh">
      <Header />
      <div className="h-10/12 flex justify-center items-center">
        <Form title="چالشتو بنویس">
          <Input lable="اسم چالش" />
          <input type="date" className="input w-full rounded-2xl text-black" />
          <div className="bg-white/50 rounded-2xl p-3 space-y-3">
            <Input lable={`چالش روز ${numDay} بنویس`} />
            <div className="flex gap-3">
              <Btn className="grow">اضافه کن</Btn>
              <Btn className="grow">برو روز بعد</Btn>
            </div>
            <ul className="bg-white p-3 rounded-xl text-black space-y-2">
              {chalengeItem.map((item) => (
                <li className="border-r border-violet-500 pr-2">{item}</li>
              ))}
            </ul>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateChalenge;

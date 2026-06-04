import { useEffect, useLayoutEffect, useState } from "react";
import ButtonBack from "../../ui/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate } from "react-router";
import Btn from "../../ui/Btn";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { Selecte, Option } from "../../ui/Selecte";

function AddItemDaily() {
  const { dispatch } = useGoalsContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const filterShowDescriptin = description.replace("@/", "\t");

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

    dispatch({ type: "daily/newItem", payload: newItem });

    navigate("/home");
  };

  // useEffect(() => {
  //   const fn = (e) => {
  //     if (e.keyCode == 13) setDescription((cur) => cur + "\n");
  //   };

  //   document.addEventListener("keydown", fn);

  //   return () => document.removeEventListener("keydown", fn);
  // }, [description]);

  return (
    <div className="flex justify-center items-center h-screen">
      <ButtonBack />
      <Form className="mx-5" onSubmit={handleSubmit}>
        <Input lable="عنوان" onGetInput={setTitle} value={title} />

        <Input
          type="textarea"
          value={description}
          onGetInput={(value) => setDescription(value)}
          lable="توضیحات"
          htmlFor="test"
          checked={true}
        />
        <Selecte title="بدون دسته بندی" onGetValue={setCategory}>
          <Option value="personal">شخصی🙎</Option>
          <Option value="work">کاری🏢</Option>
          <Option value="study">درسی📚</Option>
        </Selecte>

        <Btn type="black">اضفافه کردن</Btn>
      </Form>
    </div>
  );
}

export default AddItemDaily;

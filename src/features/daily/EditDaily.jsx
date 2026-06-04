import { useEffect, useState } from "react";
import ButtonBack from "../../ui/ButtonBack";
import { useGoalsContext } from "../../contexts/GoalsContext";
import { useNavigate, useParams } from "react-router";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { Option, Selecte } from "../../ui/Selecte";
import Btn from "../../ui/Btn";

function EditDaily() {
  const { getDataDailyGoal, editDailyGoal, dispatch } = useGoalsContext();
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

    dispatch({ type: "daily/editItem", payload: newItem });

    navigate("/home");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ButtonBack />

      <Form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          lable="عنوان"
          value={title}
          onGetInput={setTitle}
          required
        />

        <Input
          type="textarea"
          lable="توضیحات"
          value={description}
          onGetInput={setDescription}
        />

        <Selecte
          className="select select-sm w-full text-neutral-500 rounded-full"
          value={category}
          onGetValue={setCategory}
        >
          <Option value="none" selected>
            بدون دسته بندی
          </Option>
          <Option value="personal">شخصی🙎</Option>
          <Option value="work">کاری🏢</Option>
          <Option value="study">درسی📚</Option>
        </Selecte>

        <Btn type="black">ویرایش کردن</Btn>
      </Form>
    </div>
  );
}

export default EditDaily;

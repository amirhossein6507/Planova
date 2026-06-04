import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

function Tools({ handleDelete, id }) {
  const navigate = useNavigate();

  const handleDeleteItem = () => {
    const result = window.confirm("مطمئنی میخوای پاکش کنی؟");
    if (result) {
      handleDelete({ type: "longTrem/deleteItem", payload: id });
      navigate("/home/long-trem");
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-row-reverse gap-2 pt-5">
      <button className="btn btn-sm btn-error" onClick={handleDeleteItem}>
        <FaTrash color="eee" size={16} />
      </button>
      <Link to={`/edit-longTrem/${id}`} className="btn btn-sm btn-warning">
        <BiSolidPencil color="#eee" size={18} />
      </Link>
    </div>
  );
}

export default Tools;

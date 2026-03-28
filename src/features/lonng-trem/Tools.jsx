import { useNavigate } from "react-router";

function Tools({ handleDelete, id }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row-reverse gap-2 pt-5">
      <button
        className="btn btn-sm btn-error"
        onClick={() => {
          handleDelete({ type: "longTrem/deleteItem", payload: id });
          navigate("/home/long-trem");
        }}
      >
        🗑️
      </button>
      <button className="btn btn-sm btn-warning">✏️</button>
    </div>
  );
}

export default Tools;

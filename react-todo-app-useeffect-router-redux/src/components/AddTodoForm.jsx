import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd} style={{ marginLeft: 8 }}>
        Add
      </button>
    </div>
  );
}

export default AddTodoForm;

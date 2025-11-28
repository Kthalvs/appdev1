import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todosSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li style={{ marginBottom: 8 }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span style={{ marginLeft: 8, textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={handleDelete} style={{ marginLeft: 12 }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;


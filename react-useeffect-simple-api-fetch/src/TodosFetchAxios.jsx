import { useEffect, useState } from "react";
import axios from "axios";

function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setTodos(response.data);
      } catch (err) {
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Todos List (Axios)</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} —{" "}
            <strong>{todo.completed ? "Completed ✅" : "Not Completed ❌"}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosFetchAxios;

import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;


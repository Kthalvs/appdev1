export default function TodoList() {
  return (
    // The outer <div> acts as the single enclosing tag
    <div>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOOs.jpg"
        alt="Hedy Lamarr"
        className="photo" // className instead of class
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </div>
  );
}
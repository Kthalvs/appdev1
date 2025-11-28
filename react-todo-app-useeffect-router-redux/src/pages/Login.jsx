import { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=2")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  function handleLogin() {
    const foundUser = users.find((user) => user.username === username);

    if (!foundUser) {
      alert("Username not found!");
      return;
    }

    if (password !== SECRET) {
      alert("Incorrect password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.location.href = "/todos";
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username (E.g., Bret)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        style={{ marginTop: 8 }}
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button style={{ marginTop: 8 }} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;


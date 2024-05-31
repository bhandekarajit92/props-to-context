import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext.js";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login </h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../componants/Loading";
import React from "react";

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
  localStorage.clear()
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      setIsLoading(true);
      e.preventDefault();
      console.log("handleSubmit");
      fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: { accept: "*/*" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          localStorage.setItem('authToken', data.token);
          if (data.status == "ok") router.push("/").then(() => window.location.reload());
        })
        .catch((error) => console.error(error));
    },
    [username, password]
  );

  return (
    <div className="container selector">
      {isLoading && <Loading />}
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>

    // <form onSubmit={handleSubmit}>
    //   {/* Form fields */}
    //   <button type="submit">Login</button>
    // </form>
  );
}
export default Login;

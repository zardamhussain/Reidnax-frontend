import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:4000/api/v1/users/signup",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.status === "success") {
        alert("SignUp successfully");
        location.assign("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup">
      <form method="post" className="abcd" onSubmit={signup}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input
          type="text"
          name="name"
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signup}>Sign up</button>
      </form>
    </div>
  );
}

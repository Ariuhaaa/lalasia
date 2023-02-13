import { useState } from "react";
// import { Form, FormLabel, FormControl } from "react-router-dom";

export default function userLogin() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="container">
      <div>
        <br />
        <div>
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control w-25 "
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Firstname</label>
          <input
            type="text"
            className="form-control w-25"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Username</label>
          <input
            type="text"
            className="form-control w-25"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="text"
            className="form-control w-25"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            type="email"
            className="form-control w-25"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <br />
    </div>
  );
}

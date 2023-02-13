import { useState } from "react";

export default function userLogin() {
  // const [lastname, setLastname] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const init = {
    lastname: "",
    firstname: "",
    username: "",
    password: "",
    email: "",
  };

  const [user, setUser] = useState(init);

  const onSave = (e) => {
    e.preventDefault();

    fetch("http: //localhost:8080/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
      })
      .catch((err) => console.log(err));
    setUser(init);
  };

  return (
    <div className="container">
      <div>
        <br />
        <div>
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control w-25 "
            // value={lastname}
            // onChange={(e) => setLastname(e.target.value)}
            onChange={(e) => {
              setUser({ ...user, lastname: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Firstname</label>
          <input
            type="text"
            className="form-control w-25"
            // value={firstname}
            // onChange={(e) => setFirstname(e.target.value)}
            onChange={(e) => {
              setUser({ ...user, firstname: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Username</label>
          <input
            type="text"
            className="form-control w-25"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="text"
            className="form-control w-25"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            type="email"
            className="form-control w-25"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
      </div>
      <br />
      <button className="btn btn-primary" onClick={onSave}></button>
    </div>
  );
}

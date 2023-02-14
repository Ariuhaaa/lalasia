import { useState } from "react";

export default function SignUp({ show, CallModal }) {
  const ds = show ? "flex" : "none";
  console.log(show);
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

    console.log(JSON.stringify(user));

    fetch("http://localhost:8080/api/user", {
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
    <div
      className="position-absolute modal justify-content-center align-items-center  "
      style={{ display: ds, backgroundColor: "rgba(255,255,255,0.8)" }}
      onClick={CallModal}
    >
      <div
        className=" bg-white border h-50 col-4 p-2 rounded-4 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <br />
        <div>
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control  w-75 "
            value={user.lastname}
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
            className="form-control  w-75"
            value={user.firstname}
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
            className="form-control w-75"
            value={user.username}
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
            className="form-control  w-75"
            value={user.password}
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
            className="form-control  w-75"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <br />
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={onSave}>
            Sign Up
          </button>
          <button className="btn btn-success" onClick={CallModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

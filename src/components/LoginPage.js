import React, { useState } from "react";
import SignUp from "./SignUpModal";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function CallModal() {
    setShow(!show);
  }

  const onLogin = (email, password) => {
    // setUsername(username);
    // console.log(username, password);
    axios
      .post("http://localhost:8080/api/user/login", { email, password })
      .then(({ data: { status, result, message } }) => {
        console.log(status, result, message);
        if (status) {
          localStorage.setItem("userId", result.id);
          localStorage.setItem("email", result.email);
          localStorage.setItem("lastname", result.lastname);
          // localStorage.setItem("userId", result.id);
        } else {
          alert(message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SignUp show={show} CallModal={CallModal} />
      <div onClick={(e) => e.stopPropagation()}>
        <br />
        <br />
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className="form-control w-25"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control w-25"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="gap-2 d-flex">
          <button className="btn btn-success" onClick={onLogin}>
            Login
          </button>
          <button className="btn btn-primary" onClick={CallModal}>
            Sign Up
          </button>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import SignUp from "./SignUpModal";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function CallModal() {
    setShow(!show);
  }
  return (
    <div>
      <SignUp show={show} CallModal={CallModal} />
      <div className="" onClick={(e) => e.stopPropagation()}>
        <br />
        <br />
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className="form-control w-25"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button className="btn btn-success">Login</button>
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

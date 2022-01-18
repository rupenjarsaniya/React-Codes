import React, { useState } from "react";

const Input = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [label, setLabel] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setLabel(user.name);
  }
  const readInput = (event) => {
    const {name, value} = event.target
    setUser({ ...user, [name]: value });
  };
  return (
    <>
          <form method="POST" onSubmit={onSubmit}>
      <div className="container">
        <div className="input_content">
            <label className="label">Hellow {label}</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={readInput}
              value={user.name}
            />
            <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={readInput}
            value={user.email}
          />
            <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={readInput}
            value={user.password}
          />
            <button type="submit" className="btn">
              Submit
            </button>
        </div>
      </div>
          </form>
    </>
  );
};

export default Input;

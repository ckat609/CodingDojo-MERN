import React, { useState } from "react";

const UserForm = (props) => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { fname, lname, email, password, password_confirmation };
    fname = "";
    console.log(newUser);
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div className="form-group">
          <label htmlFor="fname">
            First name
            <input
              className="form-control"
              type="text"
              onChange={(e) => setFName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lname">
            Last name
            <input
              className="form-control"
              type="text"
              onChange={(e) => setLName(e.target.value)}
              value={lname}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              className="form-control"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              className="form-control"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">
            Password confirmation
            <input
              className="form-control"
              type="password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={password_confirmation}
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>

      <h1>Your form data</h1>
      <li className="card p-3">First name: {fname}</li>
      <li className="card p-3">Last name: {lname}</li>
      <li className="card p-3">Email: {email}</li>
      <li className="card p-3">Password: {password}</li>
      <li className="card p-3">
        Password confirmation: {password_confirmation}
      </li>
    </>
  );
};

export default UserForm;

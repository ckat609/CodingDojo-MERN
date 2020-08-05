import React from "react";

const Form = (props) => {
  var { input, setInput } = props;
  var newUser = [];

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    newUser = [...newUser, input];
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div className="form-group">
          <label htmlFor="fname">First name</label>
          <input
            className="form-control"
            type="text"
            name="fname"
            onChange={onChange}
            value={input.fname}
          />
        </div>
        {input.fname.length === 0 ? (
          ""
        ) : input.fname.length < 2 ? (
          <li>First name must be at least 2 characters long</li>
        ) : (
          ""
        )}
        <div className="form-group">
          <label htmlFor="lname">Last name</label>
          <input
            className="form-control"
            type="text"
            name="lname"
            onChange={onChange}
          />
        </div>
        {input.lname.length === 0 ? (
          ""
        ) : input.lname.length < 2 ? (
          <li>Last name must be at least 2 characters long</li>
        ) : (
          ""
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
          />
        </div>
        {input.email.length === 0 ? (
          ""
        ) : input.email.length < 5 ? (
          <li>Email must be at least 5 characters long</li>
        ) : (
          ""
        )}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">Password confirmation</label>
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            onChange={onChange}
          />
        </div>
        {input.password.length === 0 ? (
          ""
        ) : input.password.length < 8 ? (
          <li>The password must be at least 8 characters long</li>
        ) : input.password_confirmation != input.password ? (
          <li>The password and password confirmation do not match</li>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Form;

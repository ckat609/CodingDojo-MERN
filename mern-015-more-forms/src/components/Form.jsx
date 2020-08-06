import React from "react";

const Form = (props) => {
  var { value, setValue } = props;
  var newUser = [];

  const onChange = (e) => {
    console.log(e.target);
    let field = e.target.name;
    let val = e.target.value;
    setValue((prev) => {
      return {
        ...prev,
        [field]: val,
      };
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    newUser = [...newUser, value];
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
            value={value.fname}
          />
        </div>
        {value.fname.length === 0 ? (
          ""
        ) : value.fname.length < 2 ? (
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
        {value.lname.length === 0 ? (
          ""
        ) : value.lname.length < 2 ? (
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
        {value.email.length === 0 ? (
          ""
        ) : value.email.length < 5 ? (
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
        {value.password.length === 0 ? (
          ""
        ) : value.password.length < 8 ? (
          <li>The password must be at least 8 characters long</li>
        ) : value.password_confirmation != value.password ? (
          <li>The password and password confirmation do not match</li>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Form;

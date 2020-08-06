import React from "react";

const Form = (props) => {
  var { fname, setFName } = props;
  var newUser = [];

  const onChange = (e) => {
    console.log(e.target.value);
    setFName(e.target.value);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="fname">First name</label>
          <input
            className="form-control"
            type="text"
            name="fname"
            onChange={onChange}
            value={fname}
          />
        </div>
        {fname.length === 0 ? (
          ""
        ) : fname.length < 2 ? (
          <li>First name must be at least 2 characters long</li>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Form;

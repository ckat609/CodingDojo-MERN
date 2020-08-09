import React, { useState } from "react";

const Form = ({ addActivity }) => {
  const [activity, setActivity] = useState("");

  const onChange = (e) => {
    let tempActivity = e.target.value;
    setActivity(tempActivity);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="activity">Activity</label>
        <input
          className="form-control"
          type="text"
          name="activity"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            addActivity(activity);
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;

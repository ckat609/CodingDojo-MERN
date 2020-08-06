import React, { useState } from "react";

const Form = ({ addBoxes }) => {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoxes({ color: color, width: width, height: height });
    console.log(color, width, height);
  };

  const withValue = (fn) => (e) => {
    const value = e.target.value;
    fn(value);
  };

  const handleColorChange = withValue(setColor);

  return (
    <form className="container w-25">
      <div className="row">
        <div className="col">
          <h1>Add a new color</h1>
          <div className="form-group">
            <label>Color</label>
            <input
              className="form-control"
              type="text"
              onChange={handleColorChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Width</label>
            <input
              className="form-control"
              type="text"
              onChange={withValue(setWidth)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Height</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => {
                let temp = e.target.value;
                setHeight(temp);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

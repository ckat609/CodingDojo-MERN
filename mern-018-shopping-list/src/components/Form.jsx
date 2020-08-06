import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleItem = (e) => {
    e.preventDefault();
    let item = {
      name: name,
      color: color,
    };
    props.addItemToCart(item);
    setName("");
    setColor("");
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => {
            let tempName = e.target.value;
            setName(tempName);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Color</label>
        <input
          className="form-control"
          type="text"
          value={color}
          onChange={(e) => {
            let tempColor = e.target.value;
            setColor(tempColor);
          }}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-info" onClick={handleItem}>
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;

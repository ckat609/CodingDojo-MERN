import React, { Component } from "react";

class PersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { age: this.props.age };
  }

  render() {
    return (
      <>
        <h1>
          {this.props.lname}, {this.props.fname}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair color: {this.props.color}</p>
        <button onClick={this.birthday}>Birthday</button>
      </>
    );
  }

  birthday = () => {
    this.setState({ age: this.state.age + 1 });
  };
}

export default PersonComponent;

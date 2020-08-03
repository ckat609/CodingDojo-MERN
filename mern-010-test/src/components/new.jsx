import React, { Component } from "react";

class TestComponent extends Component {
  render() {
    return (
      <>
        <h3>Hola</h3>
        <h5>{this.props.greet}Wilkommen</h5>
      </>
    );
  }
}

export default TestComponent;

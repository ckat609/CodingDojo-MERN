import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Age: {this.props.age}</li>
          <li>Age: {this.props.hair}</li>
        </ul>
      </>
    );
  }
}

export default PersonCard;

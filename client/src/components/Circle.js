import React, { Component } from "react";

class Circle extends Component {
  render() {
    var style = {
      width: this.props.diameter,
      height: this.props.diameter,
      backgroundColor: this.props.backgroundColor,
      borderRadius: "50%",
      display: "inline-block",
      position: "fixed",
      left: this.props.x,
      top: this.props.y,
      zIndex: 99
    };
    return (
      <div style={style}>
      </div>
    );
  }
}

export default Circle;

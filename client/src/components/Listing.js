import React, { Component } from "react";

class Listing extends Component {
    render() {
        return (<div className="listing-card">
            <h3>{this.props.title}</h3>
            <h4>Organizer: {this.props.name}</h4>
            <h4>Course: {this.props.course}</h4>
        </div>);
    }
}

export default Listing;

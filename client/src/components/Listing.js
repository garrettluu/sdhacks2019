import React, { Component } from "react";

class Listing extends Component {
    render() {
        return (<div className="listing-card">
            <p className="listing-title">{this.props.title}</p>
            <p className="listing-field">Organizer: {this.props.name}</p>
            <p className="listing-field">Course: {this.props.course}</p>
            <button className="listing-join" onClick={this.props.onJoin}>Join group</button>
        </div>);
    }
}

export default Listing;

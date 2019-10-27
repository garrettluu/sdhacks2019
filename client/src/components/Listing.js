import React, { Component } from "react";

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            joined: false,
        }
    }
    handleButtonClick() {
        this.props.onJoin();
        if (this.state.joined) {
            this.setState({joined: false})
        } else {
            this.setState({joined: true})
        }
    }

    showButtonText() {
        if (!this.state.joined) {
            return "Join group";
        } else {
            return "Leave group";
        }
    }

    buttonColor() {
        if (this.state.joined) {
            return { backgroundColor: "#ef5350" };
        } else {
            return { backgroundColor: "#4a9878" };
        }
    }

    render() {
        return (<div className="listing-card">
            <p className="listing-title">{this.props.title}</p>
            <p className="listing-field">Organizer: {this.props.name}</p>
            <p className="listing-field">Course: {this.props.course}</p>
            <button className="listing-join" style={this.buttonColor()} onClick={this.handleButtonClick.bind(this)}>{this.showButtonText()}</button>
        </div>);
    }
}

export default Listing;

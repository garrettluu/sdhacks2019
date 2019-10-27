import FindGroupImg from "../Images/FindGroup.png";
import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';

import "../CSS/FindGroup.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "Garrett Luu",
            course: "",
            location: "",
            time: "",
        }
    }

    setTitle(event) {
        this.setState({title: event.target.value});
    }

    setCourse(event) {
        this.setState({course: event.target.value});
    }

    setLocation(event) {
        this.setState({location: event.target.value});
    }

    setTime(event) {
        this.setState({time: event.target.value});
    }

    handleSubmit() {
        let newEntry = {
            title: this.state.title,
            name: this.state.name,
            location: this.state.location,
            course: this.state.course,
        };
        axios.post("http://localhost:3001/createlisting",
            {
                title: this.state.title,
                name: this.state.name,
                course: this.state.course,
                location: "Geisel",
                time: "10:00AM"
            }
        ).then(res => {
            console.log(res);
            console.log(res.data);
        });    }

    render() {
        return (
            <div className="CreateGroup">
                <div className="half-screen">
                    <label className="listing-field">Study Group Name:</label>
                    <input className="input-group" type="text"  onChange={this.setTitle.bind(this)}/>
                    <label className="listing-field">What I'm Studying:</label>
                    <input className="input-group" type="text"  onChange={this.setCourse.bind(this)}/>
                    <label className="listing-field">Where I'm Studying:</label>
                    <input className="input-group" type="text"  onChange={this.setLocation.bind(this)}/>
                    <label className="listing-field">When I'm Studying:</label>
                    <input className="input-group" type="text"  onChange={this.setTime.bind(this)}/>
                    <button className="listing-join" onClick={this.handleSubmit.bind(this)}>Create</button>
                </div>
                <div className="half-screen cool-image">
                    <img className="cool-image" src={FindGroupImg} width="50%"/>
                </div>
            </div>
        );
    }
}

export default CreateGroup;

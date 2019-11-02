import React, { Component } from "react";
import { Link, Redirect, BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Listing from "../components/Listing";
import FindGroupImg from "../images/FindGroup.png";
import "../stylesheets/FindGroup.css"
import CreateGroup from "./CreateGroup";

class FindGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            uid: "",
            redirect: false
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get("http://localhost:3001/getlistings")
            .then(res => {
                this.setState({
                    data: res.data,
                })
            });
    }

    componentDidMount() {
        this.getData();
    }

    buildListingsfromDatabase() {
        let listings = this.state.data;
        let cards = [];
        for (let key in listings) {
            console.log(listings);
            let title = listings[key].title;
            cards.push(<Listing title={listings[key].title} name={listings[key].data.name} course={listings[key].data.course}
                                onJoin={this.handleOnJoin.bind(this, title)} />);
        }
        return cards;
    }

    handleOnJoin(title) {
        let user = this.props.firebase.auth().currentUser;
        if (user) {
            axios.post("http://localhost:3001/joinGroup", {
                title: title,
                uid: user.uid,
            }).then(res => {

            });
        } else {
            this.setState({redirect: true})
        }
    }

    redirectToLogin() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/login",
                props: {firebase: this.props.firebase}
            }}/>
        }
    }

    render() {
        return (
            <div>
                    <div className="FindGroup">
                        {this.redirectToLogin()}
                        <div className="half-screen">
                            <h4 className="list-title">Available Groups</h4>
                            {this.buildListingsfromDatabase()}
                            <div className="listing-card">
                                <Link className="listing-field" to="/stakks/createGroup">Create New Group +</Link>
                            </div>
                        </div>
                        <div className="half-screen cool-image">
                            <img className="cool-image" src={FindGroupImg} width="50%"/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default FindGroup;


import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import Listing from "../components/Listing";
import FindGroupImg from "../Images/FindGroup.png";
import "../CSS/FindGroup.css"

class FindGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            uid: ""
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
            cards.push(<Listing title={listings[key].title} name={listings[key].data.name} course={listings[key].data.course}/>);
        }
        return cards;
    }

    render() {
        return (
            <div className="FindGroup">
                <div className="half-screen">
                    <h4 className="list-title">Available Groups</h4>
                    {this.buildListingsfromDatabase()}
                    <div className="listing-card">
                        <Link className="listing-field">Create New Group +</Link>
                    </div>
                </div>
                <div className="half-screen cool-image">
                    <img className="cool-image" src={FindGroupImg} width="50%"/>
                </div>
            </div>
        );
    }
}

export default FindGroup;


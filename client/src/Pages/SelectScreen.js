import React from "react";
import axios from 'axios';
import "./SelectScreen.css"
import MyStakks from "../Images/MyStakks.png"
import FindGroup from "../Images/FindGroup.png"
import { BrowserRouter, Link, Route } from "react-router-dom";
import Listing from "../components/Listing";

export default class SelectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
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
            <div className="Screen">
                <BrowserRouter>
                    <div className="Link-Container">
                        <Link to="/stakk/myStakks">
                            <img src={MyStakks} className="Pictures" alt="MyStakks"
                                 height="180px" width="auto"/>
                        </Link>
                        <Link to="/stakk/findGroup">
                            <img src={FindGroup} className="Pictures" alt="FindGroup"
                                 height="180px" width="auto"/>
                        </Link>
                    </div>
                    {this.buildListingsfromDatabase()}

                    {/*<div className="">*/}
                    {/*  <Route exact path="/stakk/myStakks" component={myStakks}/>*/}
                    {/*  <Route exact path="/stakk/findGroup" component={findGroup}/>*/}
                    {/*</div>*/}
                    <div />

                </BrowserRouter>
            </div>
        );
    }
}

function myStakks(){
    return(<h1>stakked</h1>)
}

function findGroup(){
    let cards = [];
    axios.get("http://localhost:3001/getlistings")
        .then(res => {
            console.log(res);
            res.data.forEach(listing => {
                cards.push(<Listing title={listing.title} name={listing.data.name} course={listing.data.course}/>);
            });
        });
    return cards;
}

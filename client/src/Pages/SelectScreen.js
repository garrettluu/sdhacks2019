import React from "react";
import "../CSS/SelectScreen.css";
import "../CSS/Header.css";
import axios from 'axios';
import MyStakks from "../Images/MyStakks.png"
import FindGroupImg from "../Images/FindGroup.png"
import { BrowserRouter, Link, Route } from "react-router-dom";
import Listing from "../components/Listing";
import FindGroup from "./FindGroup";
import StakkView from "./StakkView";

export default class SelectScreen extends React.Component {
    render() {
        return (
            <div className="content">
                    {choice()}
            </div>
        );
    }
}

function choice(){
    return(
        <div className="choiceContainer">

            <Link className="choiceTitle" to="/stakks/myStakks">
                <div className="choice">
                    <img src={MyStakks} className="choicePic" alt="MyStakks"
                         height="220px" width="auto"/>
                    See Stakks
                </div>
            </Link>

            <Link className="choiceTitle" to="/stakks/findGroup">
                <div className="choice">
                    <img src={FindGroupImg} className="choicePic" alt="FindGroup"
                         height="220px" width="auto"/>
                    Group Up
                </div>
            </Link>
        </div>

    )
}

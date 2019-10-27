import React from "react";
import "../CSS/SelectScreen.css";
import "../CSS/Header.css";
import axios from 'axios';
import MyStakks from "../Images/MyStakks.png"
import FindGroup from "../Images/FindGroup.png"
import { BrowserRouter, Link, Route } from "react-router-dom";
import Listing from "../components/Listing";
import StakkView from "../StakkView";

export default class SelectScreen extends React.Component {
  render() {
    return (
	<div className="content">
      <BrowserRouter>

      <div className="">
        <Route exact path="/stakks">
	    {choice()}
	    </Route>
        <Route exact path="/stakk/findGroup" component={findGroup}/>
    </div>
	    <div />

    </BrowserRouter>
	    </div>
    );
  }
}

function choice(){
	return(
          <div className="choiceContainer">

		<Link className="choiceTitle" to="/stakk/myStakks">
		<div className="choice">
		<img src={MyStakks} className="choicePic" alt="MyStakks"
                	height="220px" width="auto"/>
		 See Stakks
		</div>
		</Link>

              <Link className="choiceTitle" to="/stakk/findGroup">
		<div className="choice">
              		<img src={FindGroup} className="choicePic" alt="FindGroup"
                	height="220px" width="auto"/>
		Group Up
		</div>
              </Link>
        </div>

	)
}

function myStakks(){
	return(<h1>stakked</h1>)
}

function findGroup(){
	return(<h1>fg</h1>)
}

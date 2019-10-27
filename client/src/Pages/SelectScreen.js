import React from "react";
import "./SelectScreen.css"
import MyStakks from "../Images/MyStakks.png"
import FindGroup from "../Images/FindGroup.png"
import { BrowserRouter, Link, Route } from "react-router-dom";

export default class SelectScreen extends React.Component {
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

      <div className="">
        <Route exact path="/stakk/myStakks" component={myStakks}/>
        <Route exact path="/stakk/findGroup" component={findGroup}/>
    </div>
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
	return(<h1>fg</h1>)
}

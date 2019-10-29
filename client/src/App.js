import React, { Component } from "react";

import Header from "./Header.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import * as firebase from "firebase";
import SelectScreen from "./Pages/SelectScreen";
import FindGroup from "./Pages/FindGroup";
import CreateGroup from "./Pages/CreateGroup";
import {BrowserRouter, Route} from "react-router-dom";

function App () {
    return (
            <BrowserRouter>
                <Header />
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" render={() => <Login firebase={firebase}/>}/>
                    <Route exact path="/stakks" render={() => <SelectScreen firebase={firebase}/>}/>
                    <Route exact path="/stakks/findGroup" render={() => <FindGroup firebase={firebase}/>}/>
                    <Route exact path="/stakks/createGroup" render={() => <CreateGroup firebase={firebase}/>}/>
                </div>
            </BrowserRouter>
    );
}

export default App;

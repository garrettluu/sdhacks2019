import React, { Component } from "react";

import Header from "./Header.js";
import Home from "./pages/Home";
import Login from "./pages/Login";
import * as firebase from "firebase";
import SelectScreen from "./pages/SelectScreen";
import FindGroup from "./pages/FindGroup";
import CreateGroup from "./pages/CreateGroup";
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

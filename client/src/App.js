import React, { Component } from "react";

//Page component imports
import Header from "./Header.js";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SelectScreen from "./pages/SelectScreen";
import FindGroup from "./pages/FindGroup";
import CreateGroup from "./pages/CreateGroup";

import * as firebase from "firebase";
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
                    <Route exact path="/signup" render={() => <SignUp firebase={firebase}/>}/>
                </div>
            </BrowserRouter>
    );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SelectScreen from "./Pages/SelectScreen";

import Logo from "./Images/logo.png";


import "./App.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="header">
                    <div className="Nav-Bar">
                        <div className="Nav-Group">
                            <img src={Logo} className="Logo" alt="logo"
                                 height="60px" width="auto"/>
                            <Link className="Nav-Link" to="/">
                                Home
                            </Link>
                            <Link className="Nav-Link" to="/about">
                                About
                            </Link>
                            <Link className="Nav-Link" to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/stakk" component={SelectScreen}/>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;

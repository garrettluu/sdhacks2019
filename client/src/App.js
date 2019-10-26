import React from "react";
import Home from "./Pages/Home";
import Login from "./Login";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Logo from "./Images/logo.png";


import "./App.css";

class App extends React.Component {
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
      </div>

    </BrowserRouter>
    );
  }
}

export default App;

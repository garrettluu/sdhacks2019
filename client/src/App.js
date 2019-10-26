import React from "react";
import Home from "./Pages/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./Images/logo.png";
//import logo from './logo.svg';
/*      <header className="App-header">
  //<img src={logo} className="App-logo" alt="logo" /> */
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="Main-Header">
          <div className="Header-Left">
            <div className="Logo">
              <img src={Logo} className="Logo" alt="logo" />
            </div>

            <nav className="Nav-Space">
              <ul className="Nav-Bar">
                <li className>
                  <Link to="/">
                    {" "}
                    <h1 className="Header-Text"> Home </h1>
                  </Link>
                </li>
                <li className="Header-Text">
                  <Link to="/about">
                    <h1 className="Header-Text"> About </h1>
                  </Link>
                </li>
                <li className="Header-Text">
                  <Link to="/users">
                    <h1 className="Header-Text"> Users </h1>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </div>

      </BrowserRouter>
      </div>
    );
  }
}

export default App;

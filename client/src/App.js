import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Home from "./Home";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div id="header">

          </div>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={Login}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

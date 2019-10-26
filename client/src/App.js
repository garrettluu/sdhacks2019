import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

class App extends Component {
  testDb() {
    console.log("Performing GET request");
    axios.get("http://localhost:3001/testdb")
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  createTestEntry() {
    let entryTest = {
      name: "Garrett Luu",
      course: "CSE 30",
      location: "Geisel",
      time: "10:00AM"
    };
    axios.post("http://localhost:3001/createlisting",
      {
        title: "Garrett's Awesome CSE Study Group!",
        name: "Garrett Luu",
        course: "CSE 100",
        location: "Geisel",
        time: "10:00AM"
      }
    ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.testDb}>TestDB</button>
          <button onClick={this.createTestEntry}>Create Test Entry</button>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import "../CSS/Home.css";
import Logo from "../Images/logo.png";

class Home extends Component {
    displayHome() {
        if (this.props.userSignedIn) {

        }
    }
    render() {
        return (
            <div className="Home">
                {/*<img src={Logo} height="600px"/>*/}
                <h1 className="splash-text">
                    A new way to study
                </h1>
            </div>
        );
    }
}

export default Home;

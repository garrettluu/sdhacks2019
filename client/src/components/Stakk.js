import React, { Component } from "react";

class Stakk extends Component {
    constructor(props){
        super(props);
    }

    shuffle() {
        this.shuffle(this.props.stakk);
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        return (<div className="top-card">
            <h2>
                {this.props.stakk.pop()}
            </h2>
        </div>);
    }
}

export default Stakk;

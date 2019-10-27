import React, { Component } from "react";
import axios from 'axios';

class StakkView extends Component {
    constructor(props) {
        super(props);

        this.getStakksUser = this.getStakksUser.bind(this);
    }

    componentDidMount() {
        this.getStakksUser(this.props.uid);
    }

    getStakksUser(uid) {
        axios.post("http://localhost:3001/getstakks", {
            uid: uid,
        }).then(res => {
            this.setState({stakks: res.data})
        });
    }

    render() {
        return(
            <h1>Hello World!</h1>
        )
    }
}

export default StakkView;

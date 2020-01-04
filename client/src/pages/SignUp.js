import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Redirect } from "react-router-dom";

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            root: {
                '&$focused $notchedOutline': {
                    borderColor: '#d8b65c',
                    borderWidth: 2,
                },
            },
            notchedOutline: {
                borderColor: 'white',
            },
            input: {
                color: 'white'
            },
        },
        MuiInputLabel: {
            root: {
                color: 'white',
                "&$focused": {
                    color: '#d8b65c'
                }
            }
        },
    }
});

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirect: false,
            isLoggedIn: false,
        };
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    async createUser() {
        await axios.post("http://localhost:3001/users/create", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res);
            console.log(res.data);

        });
        this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({redirect: true, isLoggedIn: true});
        //update state here
    }

    redirectToHome() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/stakks",
                state: { isLoggedIn: this.state.isLoggedIn }
            }}/>
        }
    }

    render() {
        return (
            <div className="content">
                <h1 id="login-header">
                    Sign Up
                </h1>
                <ThemeProvider theme={theme}>
                    <div className="input-field">
                        <TextField type="text" variant="outlined" label="Username"
                                   placeholder="example123" className="root"
                                   onChange={this.setEmail.bind(this)}
                        />
                    </div>
                    <div className="input-field">
                        <TextField type="password" variant="outlined" label="Password"
                                   placeholder="hunter2" className="root"
                                   onChange={this.setPassword.bind(this)}
                        />
                    </div>
                    <div className="input-field">
                        <TextField type="password" variant="outlined" label="Confirm password"
                                   placeholder="hunter2" className="root"
                        />
                    </div>
                    <div className="input-field">
                        {this.redirectToHome()}
                        <button id="signin-button" onClick={this.createUser.bind(this)}>
                            Sign up
                        </button>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}
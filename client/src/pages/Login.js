import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import "../stylesheets/Login.css";
import "../stylesheets/Header.css";

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
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            isLoggedIn: false,
            email: "",
            password: "",
        };
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }


    loginUser() {
        this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        this.setState({redirect: true, isLoggedIn: true});
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
                    Log In
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
                </ThemeProvider>

                <div className="input-field">
                    {this.redirectToHome()}
                    <button id="signin-button" onClick={this.loginUser.bind(this)}>
                        Sign in
                    </button>
                </div>

                <Link id="signup-link" to="/signup">
                    Don't have an account?
                </Link>

            </div>
        );
    }
}

export default Login;

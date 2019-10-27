import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Circle from '../components/Circle';

import "../CSS/Login.css";
import "../CSS/Header.css";

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: 'white',
        "&$focused": {
          color: '#d8b65c'
        }
      }
    },
    MuiInput: {
      underline: {
        //borderBottom: '2px solid white',
        "&$focused": {
          borderColor: '#d8b65c',
        },
        "&:before": {
          borderColor: 'white',
          borderBottom: '2px solid white',
        },
        "&:after": {
          borderColor: '#d8b65c',
          borderBottom: '2px solid #d8b65c',
        }
      }
    }
  }
});
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            isLoggedIn: false,
        };
    }

    async loginUser() {
        await axios.post("http://localhost:3001/users/create", {
           email: "galuu@ucsd.edu",
           password: "hunter2"
       }).then(res => {
           console.log(res);
           console.log(res.data);

       });

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
            <TextField type="text" variant="standard" label="Username"
              placeholder="example123" className="root"
            />
          </div>
          <div className="input-field">
            <TextField type="password" variant="standard" label="Password"
              placeholder="hunter2" className="root"/>
          </div>
        </ThemeProvider>

        <div className="input-field">
            {this.redirectToHome()}
        <button id="signin-button" onClick={this.loginUser.bind(this)}>
            Sign in
        </button>
        </div>
      </div>
    );
  }
}

export default Login;

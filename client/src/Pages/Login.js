import React, { Component } from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';

import "../App.css";
import "../Login.css";

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
        borderBottom: '2px solid white',
        "&$focused": {
          borderColor: '#d8b65c',
          borderBottom: '2px solid #d8b65c',
        }
      }
    }
  }
});
class Login extends Component {
  render() {
    return (
      <div className="Login">
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

      </div>
    );
  }
}

export default Login;

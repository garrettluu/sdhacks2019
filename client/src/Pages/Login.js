import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import "../App.css";
import "../Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1 id="login-header">
          Log In
        </h1>
        <div className="input-field">
          <TextField type="text" variant="outlined" label="Username"
            placeholder="example123"/>
        </div>
        <div className="input-field">
          <TextField type="password" variant="outlined" label="Password"
            placeholder="hunter2"/>
        </div>

      </div>
    );
  }
}

export default Login;

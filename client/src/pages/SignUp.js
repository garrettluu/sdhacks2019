import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

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
        };
    }

    async createUser() {
        await axios.post("http://localhost:3001/users/create", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res);
            console.log(res.data);

        });

        //update state here
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
                        />
                    </div>
                    <div className="input-field">
                        <TextField type="password" variant="outlined" label="Password"
                                   placeholder="hunter2" className="root"/>
                    </div>
                    <div className="input-field">
                        <TextField type="password" variant="outlined" label="Confirm password"
                                   placeholder="hunter2" className="root"/>
                    </div>
                    <div className="input-field">
                        <button id="signin-button">
                            Sign up
                        </button>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}
import React, { Component } from "react";

export default class Exp7 extends Component {
    render() {
        return (
            <div className="login-container">
                <h1>Welcome to RTU IT Login page</h1>
                <div className="root">
                    <form>
                        <label>Enter username</label>
                        <input type="text" placeholder="Enter username" required /><br />
                        <label>Enter password</label>
                        <input type="password" placeholder="Enter password" required /><br />
                        <input type="submit" value="Login" className="log" />
                    </form>
                </div>
            </div>
        );
    }
}
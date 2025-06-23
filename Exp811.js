import React from "react";
import '../index.css';
export default class Exp811 extends React.Component {
    render() {
        return (
            <div className="login-container">
                <h1>Welcome to RTU IT register page</h1>
                <div className="root">
                    <form>
                        <label>Enter Your Full Name</label>
                        <input type="text" placeholder="Enter Your Full Name" required /><br />
                        <label>Enter your Email ID</label>
                        <input type="text" placeholder="Enter your Email ID" required /><br />
                        <label>Enter your password</label>
                        <input type="password" placeholder="Enter your password" required /><br />
                        <label>conform Your password</label>
                        <input type="password" placeholder="confrom your password" required /><br />
                        <input type="submit" value="Register" className="log" />
                    </form>
                </div>
            </div>
        );
    }
}

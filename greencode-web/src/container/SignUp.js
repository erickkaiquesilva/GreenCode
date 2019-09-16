import React, { Component } from "react";
import BoxSignUp from '../ui/SignUp/box-signup';
class SignUp extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <BoxSignUp />
                </div>
            </div>
        )
    }
}

export default SignUp;
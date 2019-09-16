import React, { Component } from "react";
import BoxLogin from '../ui/Login/box-login';
class Login extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <BoxLogin />
                </div>
            </div>
        )
    }
}

export default Login;
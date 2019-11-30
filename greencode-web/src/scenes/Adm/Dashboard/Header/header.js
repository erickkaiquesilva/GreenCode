import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_user: 0,
            name: "",
            lastname: ""
        }
    }

    componentDidMount() {

        // if(localStorage.getItem('user') === null) {
        //     this.props.history.push("/");
        // } else {
        //     let user = JSON.parse(localStorage.getItem('user'));
        //     this.setState({ id_user: user.id, name: user.nome, lastname: user.sobrenome })
        // }
    }

    handleClick() {
        // this.state.authentication = true
        // this.setState({ authentication: this.state.authentication })

        // if (this.state.authentication) {
        //     localStorage.clear()
        //     const logout = localStorage.getItem('user');
        //     if(logout === null){
        //         this.props.history.push("/");
        //     }
        // }
    };

    render() {
        return (
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="header-adm">
                        <h1>Olá Erick Silva</h1>
                        <p>Voce esta tendo uma visão administrativa da Green Code</p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        )
    }
}

export default withRouter(Header)
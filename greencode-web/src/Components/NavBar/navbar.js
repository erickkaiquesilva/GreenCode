import React, { Component } from 'react';
import logo from '../../Resource/Image/Logo.png';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid topo">
                <div className="row">
                    <div className="logo col-lg-3 logo">
                        <img src={logo} /> 
                    </div>
                    <div className="menu col-lg-6">
                        <br></br><br></br>
                        <ul>
                            <li>MENU</li>
                            <li>QUEM SOMOS</li>
                            <li>EQUIPE</li>
                            <li>CONTATO</li>
                        </ul>
                    </div>
                    <div className="btn-login col-lg-3">
                    <br></br><br></br>
                        <Link className="link-login" to="/signIn">Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}
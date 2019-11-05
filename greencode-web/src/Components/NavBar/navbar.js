import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid topo">
                <div className="row">
                    <div className="logo col-lg-3 logo">
                        <h1>TOPO</h1>
                    </div>
                    <div className="menu col-lg-6">
                        <ul>
                            <li>MENU</li>
                            <li>MENU</li>
                            <li>MENU</li>
                            <li>MENU</li>
                        </ul>
                    </div>
                    <div className="btn-login col-lg-3">
                        <Link className="link-login" to="/signIn">Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}
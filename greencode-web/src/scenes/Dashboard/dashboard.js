import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import Header from "./Header/header";
import Summary from "./Summary/summary";
import Patners from "./Partners/partners";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var user = JSON.parse(localStorage.getItem('user'))

    if (!user.authentication) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="container dashboard">
          <Header />
          <div className="espaco"></div>
          <div className="espaco"></div>
          <div className="row">
            <Patners />
            <div className="col-lg-1"></div>
            <div className="col-lg-1"></div>
            <Summary />
          </div>
          <div className="espaco"></div>
          <div className="espaco"></div>
        </div>
      </>
    );
  }
}

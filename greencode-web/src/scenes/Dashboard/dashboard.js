import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import Header from "./Header/header";
import Summary from "./Summary/summary";
import Patners from "./Partners/partners";
import TimeLine from "./TimeLine/timeline";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var teste = JSON.parse(localStorage.getItem('teste'))

    if (!teste.authentication) {
      // this.props.history.push('/')
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
          <TimeLine />
          <div className="espaco"></div>
          <div className="espaco"></div>
          <div className="row">
            <div className="col-lg-1"></div>
            <Summary />
            <div className="col-lg-1"></div>
            <Patners />
          </div>
          <div className="espaco"></div>
          <div className="espaco"></div>
        </div>
      </>
    );
  }
}

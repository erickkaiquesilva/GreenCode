import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import Header from "./Header/header";
import Summary from "./Summary/summary";
import Patners from "./Partners/partners";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authentication: false
    }
  }

  componentDidMount() {
    var user = JSON.parse(localStorage.getItem('user'))
  }

  componentWillUpdate() {
    this.state.authentication = true
    this.setState({authentication: this.state.authentication})
    if (this.state.authentication) {
      this.props.history.push('/')
    }
  }

  render() {
    console.log(this.state.authentication)
    return (
      <>
        <div className="container-fluid dashboard">
            <Header authentication={this.authentication} />
            <Summary />
        </div>
      </>
    );
  }
}

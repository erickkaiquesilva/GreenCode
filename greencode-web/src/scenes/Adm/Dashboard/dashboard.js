import React, { Component } from "react";
import Header from "./Header/header";
import Infos from "./Infos/infos"

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authentication: false
    }
  }

  componentDidMount() {
    // var user = JSON.parse(localStorage.getItem('user'))
  }

  componentWillUpdate() {
    // this.state.authentication = true
    // this.setState({authentication: this.state.authentication})
    // if (this.state.authentication) {
    //   this.props.history.push('/')
    // }
  }

  render() {
    console.log(this.state.authentication)
    return (
      <>
        <div className="container-fluid dashboard">
            <Header />
            <Infos />
        </div>
      </>
    );
  }
}

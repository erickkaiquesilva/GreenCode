import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import api from "../../Actions/authentication";

import md5 from "md5";

import { withRouter } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      usuario: []
    };
  }

  handleChange = event => {
    console.log(event.target.value);

    const state = Object.assign({}, this.state);

    let field = event.target.id;

    state[field] = event.target.value;

    var result1 = md5("teste");
    var result2 = md5("teste");
    if (result1 == result2) {
      console.log(true);
    } else {
      console.log(false);
    }

    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();
    var payload = {
      email: this.state.email,
      senha: this.state.senha
    };

    api
      .post("/login", payload)
      .then(res => {
        this.setState({ usuario: res.data });
        console.log(this.state.usuario);
      })
      .catch(e => {
        console.log("error", e);
      });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="row">
            <article className="conteudo-esquerda col-lg-6">
              <h1>Here you recycle in a fun way!</h1>
              <div className="borda-separadora"></div>
              <p>
                Do not have an account yet ? so sign up now and start changing
                the world in a fun way.
              </p>
            </article>
            <article className="col-lg-6">
              <div className="formulario-login">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                  <input
                    onChange={e => this.handleChange(e)}
                    className="caixadeentrada"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    onChange={e => this.handleChange(e)}
                    className="caixadeentrada"
                    id="senha"
                    type="password"
                    placeholder="Senha"
                  />
                  <input type="submit" value="Login" />
                </form>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  }
}

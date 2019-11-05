import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import { signIn } from "../../Actions/resquest";
import { withRouter, Link } from "react-router-dom";

// TESTE MOCK
import { signInMock } from "../../Actions/requetMock";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
    };
  }

  handleChange = event => {
    console.log(event.target.value);

    const state = Object.assign({}, this.state);

    let field = event.target.id;

    state[field] = event.target.value;

    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();
    var payload = {
      email: this.state.email,
      senha: this.state.senha
    };

    try {
      signInMock(this.state)
        .then((response) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response))
          this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    } catch (err) {
      console.log("error ", err);
    }

  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="row">
            <article className="conteudo-esquerda col-lg-6">
              <h1>Aqui você recicla de uma maneira divertida!</h1>
              <div className="borda-separadora"></div>
              <p>
                Não tem uma conta ainda ? então <Link to="/signUp"><a>inscreva-se</a></Link> agora e
                comece a mudar o mundo de uma maneira divertida.
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

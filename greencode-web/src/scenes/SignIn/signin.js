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
      Error: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem('user') !== null) {
      this.props.history.push('/dashboard')
    }
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
      signIn(this.state)
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem('user', JSON.stringify(response.data))
            this.props.history.push('/dashboard')
          }
        })
        .catch(e => {
          console.log("Error XPTO")
          this.state.Error = "OPS!!! Usuário ou Senha inválido!"
          this.setState(this.state)
        })
    } catch (err) {
      console.log("error ", err);
    }
  };

  render() {
    console.log(this.state.Error)
    return (
      <>
        <div className="container-fluid fundo-login">
          <div className="row">
            <div className="col-lg-1"></div>
            <article className="col-lg-5 box-login">
              <h1>Faça Seu Login</h1>
              <p>
                E comece a ganhar pontos reciclando.
                </p>
              <div className="formulario-login">
                <form onSubmit={this.handleSubmit}>
                  <label>E-mail</label>
                  <input
                    onChange={e => this.handleChange(e)}
                    className="formulario-linha"
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com.br"
                  />
                  <label>Senha</label>
                  <input
                    onChange={e => this.handleChange(e)}
                    className="formulario-linha"
                    id="senha"
                    type="password"
                    placeholder="**************"
                  />
                  <p className="textErrorLogin">
                    {this.state.Error}
                  </p>
                  <Link><a className="link-esqueciSenha">Esqueci Minha Senha</a></Link>
                  <input className="btn-formulario-linha" type="submit" value="Login" />
                </form>
              </div>
              <p className="texto-cadastrese">Não tem uma conta ainda?
                Faça já seu <Link to="/signUp"><a>cadastro</a></Link> e comece a recicla de uma maneira divertida e diferente.</p>
            </article>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import { signUp } from "../../Actions/resquest";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      cpf: "",
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

    try {
      signUp(this.state)
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
    console.log(this.state);
    return (
      <>
        <div className="container-fluid fundo-cadastro">
          <div className="row">
            <div className="col-lg-1"></div>
            <article className="col-lg-5 box-cadastrosss">
              <h1>Crie Sua Conta</h1>
              <p>
                E ajude o mundo a ser mais limpo
                </p>
              <div className="formulario-cadastro">
                <form onSubmit={this.handleSubmit}>
                  <label>E-mail</label>
                  <input
                    onChange={e => this.handleChange(e)}
                    className="formulario-linha"
                    id="nome"
                    type="email"
                    placeholder="exemplo@email.com.br"
                    required
                  />
                  <div className="campos-metade">
                    <label>Nome</label>
                    <input
                      onChange={e => this.handleChange(e)}
                      className="formulario-linha-metade fl-left"
                      id="confirmeSenha"
                      type="password"
                      placeholder="José"
                      required
                    />
                  </div>
                  <div className="campos-metade">
                    <label>Sobrenome</label>
                    <input
                      onChange={e => this.handleChange(e)}
                      className="formulario-linha-metade"
                      id="email"
                      type="email"
                      placeholder="Silva"
                      required
                    />
                  </div>
                  <label>CPF</label>
                  <input
                    onChange={e => this.handleChange(e)}
                    className="formulario-linha"
                    id="cpf"
                    type="text"
                    placeholder="999.999.999-90"
                    required
                  />
                  <label>Senha</label>
                  <input
                    onChange={e => this.handleChange(e)}
                    className="formulario-linha"
                    id="senha"
                    type="password"
                    placeholder="**************"
                    required
                  />
                  <input className="btn-formulario-linha" type="submit" value="Criar Conta" />
                </form>
              </div>
            </article>
            <div className="col-lg-6"></div>
          </div>

          <div className="espaco"></div>
          <div className="espaco"></div>
        </div>
      </>
    );
  }
}

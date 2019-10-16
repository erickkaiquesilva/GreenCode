import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container dashboard">
          <h1>Ola Usuário</h1>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="boxInfoUsuario">
                <h3>Pontos</h3>
                <p>Pts: 300</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="boxInfoUsuario">
                <h3>Itens Reciclados</h3>
                <p>30</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>

          <div className="espaco"></div>
          <div className="espaco"></div>
          <div className="espaco"></div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 extrato">
              <h3>Extrato de Pontos</h3>

              <div className="boxInfoExtrato">
                <div className="imageExtrato"></div>
                <ul>
                  <li>
                    <p className="textBold">Lata de Aluminio</p>
                  </li>
                  <li>
                    <p>Coletado Av.Paulista</p>
                  </li>
                  <li>
                    <p>40Pts</p>
                  </li>
                </ul>
              </div>
              <div className="boxInfoExtrato">
                <div className="imageExtrato"></div>
                <ul>
                  <li>
                    <p className="textBold">Lata de Aluminio</p>
                  </li>
                  <li>
                    <p>Coletado Av.Paulista</p>
                  </li>
                  <li>
                    <p>40Pts</p>
                  </li>
                </ul>
              </div>
              <div className="boxInfoExtrato">
                <div className="imageExtrato"></div>
                <ul>
                  <li>
                    <p className="textBold">Lata de Aluminio</p>
                  </li>
                  <li>
                    <p>Coletado Av.Paulista</p>
                  </li>
                  <li>
                    <p>40Pts</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-4 parceiros">
              <div className="boxParceiros">
                <div className="imageParceiros"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

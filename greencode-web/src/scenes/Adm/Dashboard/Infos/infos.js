import React, { Component } from "react";

export default class Infos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authentication: false
        }
    }

    componentDidMount() {

    }

    componentWillUpdate() {

    }

    render() {
        console.log(this.state.authentication)
        return (
            <>
                <div className="container-fluid infos">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <div className="secaoListaMaquinas">
                                <h2>Lixeiras Cadastradas</h2>
                                <div className="boxInfoLixeira">
                                    <h3>Lixeira 3</h3>
                                    <ul>
                                        <li><p>{<span className="bold">Nível da lixeiras:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Localização:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Status:</span>} Ligada</p></li>
                                    </ul>
                                    <button className="btnDesligarLixeira">Desligar Lixeira</button>
                                </div>
                                <div className="boxInfoLixeira">
                                    <h3>Lixeira 3</h3>
                                    <ul>
                                        <li><p>{<span className="bold">Nível da lixeiras:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Localização:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Status:</span>} Ligada</p></li>
                                    </ul>
                                    <button className="btnDesligarLixeira">Desligar Lixeira</button>
                                </div>
                                <div className="boxInfoLixeira">
                                    <h3>Lixeira 3</h3>
                                    <ul>
                                        <li><p>{<span className="bold">Nível da lixeiras:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Localização:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Status:</span>} Ligada</p></li>
                                    </ul>
                                    <button className="btnDesligarLixeira">Desligar Lixeira</button>
                                </div>
                                <div className="boxInfoLixeira">
                                    <h3>Lixeira 3</h3>
                                    <ul>
                                        <li><p>{<span className="bold">Nível da lixeiras:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Localização:</span>} Baixo</p></li>
                                        <li><p>{<span className="bold">Status:</span>} Ligada</p></li>
                                    </ul>
                                    <button className="btnDesligarLixeira">Desligar Lixeira</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="painelDeContagem">
                                <div className="contagemUsuarios">
                                    <h1>100</h1>
                                    <h3>Usuarios cadastrados</h3>
                                </div>
                                <div className="contagemItensReciclados">
                                    <h1>3040</h1>
                                    <h3>Total de itens reciclados</h3>
                                </div>
                                <div className="contagemLixeiras">
                                    <h1>30</h1>
                                    <h3>Total de lixeiras cadastradas</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </>
        );
    }
}

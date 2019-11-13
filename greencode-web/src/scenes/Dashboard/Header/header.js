import React, { Component } from "react";
import { balanceMock } from "../../../Actions/requetMock";

export default class Balance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_user: 0,
            name: "",
            recorded_points: 0,
            recorded_items: 0
        }
    }

    componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({ id_user: user.id_user, name: user.nome })

        try {
            const res = balanceMock(this.state.id_user)
            res.then((response) => {
                localStorage.setItem('balance', JSON.stringify(response))
                this.setState({ recorded_points: response.recorded_points, recorded_items: response.recorded_items })
            })
                .catch(err => console.log(err))
        } catch (err) {
            console.log("error ", err);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 informacoes-usuario">
                    {/* <h1><br /> {this.state.name}</h1> */}
                    <h1>Teste Teste</h1>
                    <div className="box-pontos">
                        <h4>Seus Pontos</h4>
                        <p>Pts {this.state.recorded_points}</p>
                    </div>
                    <div className="box-itens">
                        <h4>Qtds Itens Reciclados</h4>
                        <p>Pts {this.state.recorded_points}</p>
                    </div>
                    
                    <button>Reciclar</button>
                </div>
                <div className="col-lg-5 secao-objetivo">
                    <p>
                        Olá Erick Silva, voce é um reciclador novo por aqui.
                        Então para lhe ajuda veja seu objetivo, eles te ajudam
                        a ganha experiencia e cumprir com seus objetivos,
                        dando mais pontos e mais poder de troca.
                    </p>
                    <div className="message-objetivo">
                        <h1>Objetivo da semana.</h1>
                        <p>
                            Recicle até o sabádo 15 Garrfas Pets
                            e ganhe pontos multiplos por cada garrafa reciclada
                        </p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        )
    }
}
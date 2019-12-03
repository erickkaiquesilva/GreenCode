import React, { Component } from "react";
// IMPORT REQUESTS
import { summary } from "../../../Actions/resquest";
// IMPORT ICONS
import lata_icon from "../../../Resource/Image/lata_icon.png";
import location_icon from "../../../Resource/Image/location_icon.png";

export default class Summary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_user: 0,
            extract: []
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log("------ XPTO12", user)

        try {
            summary(user)
                .then((response) => { 
                    console.log("------ XPTO TESTANDO RESPOSTA DA REQUEST DO SUMMARY")
                    console.log(response.data)
                    this.setState({ extract: response.data });
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
                <div className="col-lg-4 extrato">
                    <h3>Ultimos Pontos Gastos</h3>
                    {this.state.extract.map(item => (
                        <div className="boxInfoExtrato" key={item.id}>
                            <div className="imageExtrato"><img src={lata_icon} alt="Icon" /></div>
                            <ul className="list_extract">
                                <li>
                                    <p className="textBold">{item.type}</p>
                                </li>
                                <li>
                                    <p>40Pts</p>
                                </li>
                                <li>
                                    <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 secao-marketplace">
                    <h1>Marketplace</h1>
                    <p>
                        No marketplace da Green Code, voce pode
                        trocar seus pontos por descontos em produtos/serviços
                        ou até mesmo cobrir 100% do valor com eles.
                        Troque já seus pontos e aproveite.
                    </p>
                    <button>Trocar Pontos</button>
                </div>
                <div className="col-lg-1"></div>
            </div>
        )
    }
}
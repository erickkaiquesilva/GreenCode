import React, { Component } from "react";
// IMPORT REQUESTS
import { summaryMock } from "../../../Actions/requetMock";
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

    componentWillMount() {
        try {
            const res = summaryMock(this.state.id_user)
            res.then((response) => {
                localStorage.setItem('summary', JSON.stringify(response))
            })
                .catch(err => console.log(err))
        } catch (err) {
            console.log("error ", err);
        }        

        var object = JSON.parse(localStorage.getItem('summary'))
        
        this.setState({extract: object});

        console.log(this.state.extract);
    }

    render() {
        return (
            <div className="col-lg-4 extrato">
                <h3>Extrato de Pontos</h3>

                <div className="boxInfoExtrato">
                    <div className="imageExtrato"><img src={lata_icon} alt="Icon" /></div>
                    <ul className="list_extract">
                        <li>
                            <p className="textBold">Lata de Aluminio</p>
                        </li>
                        <li>
                            <p>40Pts</p>
                        </li>
                        <li>
                            <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>                
                        </li>
                    </ul>
                </div>
                <div className="boxInfoExtrato">
                    <div className="imageExtrato"><img src={lata_icon} alt="Icon" /></div>
                    <ul className="list_extract">
                        <li>
                            <p className="textBold">Lata de Aluminio</p>
                        </li>
                        <li>
                            <p>40Pts</p>
                        </li>
                        <li>
                            <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>
                        </li>
                    </ul>
                </div>
                <div className="boxInfoExtrato">
                    <div className="imageExtrato"><img src={lata_icon} alt="Icon" /></div>
                    <ul className="list_extract">
                        <li>
                            <p className="textBold">Lata de Aluminio</p>
                        </li>
                        <li>
                            <p>40Pts</p>
                        </li>
                        <li>
                            <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
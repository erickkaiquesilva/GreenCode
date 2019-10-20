import React, { Component } from "react";
import lata_icon from "../../../Resource/Image/lata_icon.png";
import location_icon from "../../../Resource/Image/location_icon.png";

export default class Summary extends Component {
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
                            <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>
                        </li>
                        <li>
                            <p>40Pts</p>
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
                            <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>
                        </li>
                        <li>
                            <p>40Pts</p>
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
                            <p><img src={location_icon} alt="Icon" />Coletado Av.Paulista</p>
                        </li>
                        <li>
                            <p>40Pts</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
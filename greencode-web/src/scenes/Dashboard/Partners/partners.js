import React, { Component } from "react";

/* 
    IMPORT IMAGES
*/
import parceiro1 from "../../../Resource/Image/logo_parceiros/parceiro1.png";
import parceiro2 from "../../../Resource/Image/logo_parceiros/parceiro2.png";
import parceiro3 from "../../../Resource/Image/logo_parceiros/parceiro3.jpg";
import parceiro4 from "../../../Resource/Image/logo_parceiros/parceiro4.png";
import parceiro5 from "../../../Resource/Image/logo_parceiros/parceiro5.png";
import parceiro6 from "../../../Resource/Image/logo_parceiros/parceiro6.png";
import parceiro7 from "../../../Resource/Image/logo_parceiros/parceiro7.png";

export default class Summary extends Component {
    render() {
        return (
            <div className="col-lg-5 parceiros">
                <div className="boxMissiao">
                    <h2>Trilha Sustentavel</h2>
                    <p>
                        Seja bem vindo User, você acaba de iniciar sua trilha para se torna uma pessoa sustentavel.
                    </p>
                </div>
                <div className="espaco"></div>
                <div className="espaco"></div>
                <div className="espaco"></div>
                <div className="boxParceiros">
                    <h1>Parceiros GreenCode.</h1>
                    <img className="imageParceiros image_large" src={parceiro1} alt="" />
                    <img className="imageParceiros image_medium" src={parceiro2} alt="" />
                    <img className="imageParceiros image_medium" src={parceiro4} alt="" />
                </div>
                <button className="btn btn-marketplace">Trocar Meus Pontos</button>
            </div>
        )
    }
}
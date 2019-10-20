import React, { Component } from "react";

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
                <h1>Our partners.</h1>
                <p>
                    View available products and services.
                </p>
                <div className="boxParceiros">
                    <img className="imageParceiros image_large" src={parceiro1} alt="" />
                    <img className="imageParceiros image_medium" src={parceiro2} alt="" />
                    <img className="imageParceiros image_medium" src={parceiro4} alt="" />
                </div>
                <div className="boxParceiros">
                    <img className="imageParceiros image_large" src={parceiro5} alt="" />
                    <img className="imageParceiros image_medium" src={parceiro7} alt="" />
                    <img className="imageParceiros image_medium" src={parceiro3} alt="" />
                </div>
            </div>
        )
    }
}
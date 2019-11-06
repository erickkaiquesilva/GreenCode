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
            const user = localStorage.getItem('user')
            summaryMock(user)
                .then((response) => {
                    console.log()
                    this.setState({ extract: response.extract });
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log("error ", err);
        }
    }

    render() {
        return (
            <div className="col-lg-5 extrato">
                <h3>Seus Ultimos Registros</h3>
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
        )
    }
}
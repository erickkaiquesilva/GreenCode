import React, { Component } from "react";
import { balanceMock } from "../../../Actions/requetMock";

export default class Balance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_user: "",
            recorded_points: 500,
            recorded_items: 1000
        }
    }
    componentDidMount() {
        var teste = Object.assign({}, this.state);
        try {
            const res = balanceMock(this.state.id_user)
            res.then((response) => {
                // localStorage.setItem('teste', JSON.stringify(response))
            })
                .catch(err => console.log(err))
        } catch (err) {
            console.log("error ", err);
        }

        // var teste = JSON.parse(localStorage.getItem('teste'))

        // console.log("XPTO --- ", teste.name);
        console.log(teste)

    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-7 header">
                    <h1>Hello USUARIO!</h1>
                    <div className="boxInfoUser">
                        <h4>Seus Pontos</h4>
                        <p>Pts 300</p>
                    </div>
                    <div className="boxInfoUser">
                        <h4>Voce Reciclou já</h4>
                        <p>400 Items</p>
                    </div>
                </div>
                <div className="col-lg-4 btnResgate">
                    <button className="btn btn-resgate">Resgatar Meus Pontos</button>
                </div>
            </div>
        )
    }
}
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
        this.setState({ id_user: user.id_user, name: user.name })

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
                <div className="col-lg-7 header">
                    <h1>Bem vindo <br /> {this.state.name.split(' ').slice(0, 2).join(' ')}</h1>
                    <div className="boxInfoUser">
                        <h4>Seus Pontos</h4>
                        <p>Pts {this.state.recorded_points}</p>
                    </div>
                </div>
                <div className="col-lg-5 btnResgate">
                    <button>Trocar Seus Pontos</button>
                </div>
            </div>
        )
    }
}
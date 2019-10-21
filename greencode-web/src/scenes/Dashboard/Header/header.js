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
        this.setState({id_user: user.id_user, name: user.name})

        try {
            const res = balanceMock(this.state.id_user)
            res.then((response) => {
                localStorage.setItem('balance', JSON.stringify(response))
                this.setState({recorded_points: response.recorded_points, recorded_items: response.recorded_items})
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
                <div className="col-lg-7 header">
                    <h1>Hello {this.state.name}</h1>
                    <div className="boxInfoUser">
                        <h4>Seus Pontos</h4>
                        <p>Pts {this.state.recorded_points}</p>
                    </div>
                    <div className="boxInfoUser">
                        <h4>Voce Reciclou já</h4>
                        <p>{this.state.recorded_items} Items</p>
                    </div>
                </div>
                <div className="col-lg-4 btnResgate">
                    <button className="btn btn-resgate">Resgatar Meus Pontos</button>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BoxLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datas: []
        };
    }

    // validateForm() {
    //     return this.refs.email.length > 0 && this.refs.password.length > 0;
    // }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        let datas = this.state.datas
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        let data = {
            email, password
        }

        datas.push(data);


        console.log(datas)
    }

    render() {
        let datas = this.state.datas;
        return (
            <>
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="box">
                        <h1>LOGIN</h1>
                        <div className="form form-login">
                            <form onSubmit={this.handleSubmit}>
                                <label>E-mail</label>
                                <input ref="email" className="fill" type="email" value={this.state.email} onChange={this.handleChange} />
                                <label>Senhar</label>
                                <input ref="password" className="fill" type="password" value={this.state.password} onChange={this.handleChange} />
                                <center><input type="submit" value="Logar" className="btn btn-green button-big btn-signup" /></center>
                            </form>
                        </div>

                        <center><Link className="link-singup" to="/signup">Cadastre-se</Link></center>
                    </div>
                </div>
                <div className="col-3"></div>
            </>
        );
    };
}

export default BoxLogin;
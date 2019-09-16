import React from 'react';
import { Link } from 'react-router-dom';
const BoxLogin = () => {
    return(
        <>
            <div className="col-3"></div>
            <div className="col-6">
                <div className="box">
                    <h1>LOGIN</h1>
                    <div className="form form-login">
                         <label>E-mail</label>
                         <input className="fill" type="email" />
                         <label>Senhar</label>
                         <input className="fill" type="password" />
                         <center><input type="submit" value="Logar" className="btn btn-green button-big btn-signup"/></center>
                    </div>

                    <center><Link className="link-singup" to="/signup">Cadastre-se</Link></center>
                </div>
            </div>
            <div className="col-3"></div>
        </>
    );
}

export default BoxLogin;
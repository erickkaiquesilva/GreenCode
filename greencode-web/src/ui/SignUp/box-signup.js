import React from 'react';
import { Link } from 'react-router-dom';

const BoxSignUp = () => {
    return (
        <>
            <div className="col-12 col-lg-5">
                <h1>Cadastre-se</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="form form-signup">
                    <form>
                        <label>Nome Completo</label>
                        <input className="fill" type="text" />
                        <label>CPF</label>
                        <input className="fill" type="text" />
                        <label>Email</label>
                        <input className="fill" type="email" />
                        <label>Senhar</label>
                        <input className="fill" type="password" />
                        <label>Confirme a Senha</label>
                        <input className="fill" type="password" />
                        <input type="submit" value="Cadastrar-se" />
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-7"></div>
        </>
    )
}

export default BoxSignUp;
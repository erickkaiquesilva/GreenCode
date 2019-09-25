import React from 'react';
import { Link } from 'react-router-dom';

const BoxSignUp = () => {
    return (
        <>
            <div className="col-12 col-lg-5">
                <h1 className="title-left title-full pad-medium">Cadastre-se</h1>
                <p className="pad-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="form form-signup">
                    <form >
                        <label>Nome Completo</label>
                        <input className="fill" type="text" />
                        <label>CPF</label>
                        <input className="fill" type="text" />
                        <label>Sua Idade</label>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <select className="fill" name="day">
                                    <option value="00">00</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <select className="fill" name="day">
                                    <option value="00">00</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <select className="fill" name="day">
                                    <option value="00">00</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit" value="Cadastrar-se" className="btn button-full btn-signup radius" />
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-7 background-signup" style={{ height: '100vh' }}></div>
        </>
    )
}

export default BoxSignUp;
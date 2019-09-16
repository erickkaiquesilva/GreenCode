import React from 'react';
import { Link } from 'react-router-dom';

const MenuNav = () => {
    return (
        <>
        <div className="topo">
            <div className="logo">
                AQUI O LOGO
            </div>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Desativado</a>
                </li>
            </ul>
            
            <Link className="btns-access font-bold btn-green" to="/login">LOGAR</Link>
            <Link className="btns-access font-normal btn-line-white" to="/signup">CADASTRAR-SE</Link>
        </div>
       
        </>
    );
};

export default MenuNav
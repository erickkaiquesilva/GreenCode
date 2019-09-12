import React from 'react';

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
            
            <a className="btns-access font-bold btn-green" href="">LOGAR</a>
            <a className="btns-access font-normal btn-line-white" href="">CADASTRAR-SE</a>
        </div>
       
        </>
    );
};

export default MenuNav
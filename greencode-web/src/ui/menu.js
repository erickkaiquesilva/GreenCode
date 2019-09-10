import React from 'react';

const MenuNav = () => {
    return (
        <>
        <div className="logo">
            AQUI O LOGO
        </div>
        
        <div className="menu">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Desativado</a>
                </li>
            </ul>
        </div>
            
        </>
    );
};

export default MenuNav
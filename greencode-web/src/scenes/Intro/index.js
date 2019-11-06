import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/navbar'
import Logo from '../../Resource/Image/teste.png';

export default class Intro extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid wallpaper-intro">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10 conteudo-intro">
                            <h1>O que é a <br />Green Code?</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <button>Cadastre-se</button>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
                <div className="espaco"></div>
                <div className="container">
                    <article className="oquesomos ">
                        <h1>Como a Green Code funciona!</h1>
                        <div className="espaco"></div>
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <section className="box-explicativo col-lg-4">
                                <h1>Titulo Seção</h1>
                            </section>
                        </div>
                        <div className="espaco"></div>
                        <div className="row">
                            <section className="caixas-explicativas col-lg-4">
                                <h3>TITULO EXPLICATIVO</h3>
                                <p>Explicação de cada passo</p>
                                <img src={Logo} />
                            </section>
                            <section className="caixas-explicativas col-lg-4">
                                <h3>TITULO EXPLICATIVO</h3>
                                <p>Explicação de cada passo</p>
                                <img src={Logo} />
                            </section>
                            <section className="caixas-explicativas col-lg-4">
                                <h3>TITULO EXPLICATIVO</h3>
                                <p>Explicação de cada passo</p>
                                <img src={Logo} />
                            </section>
                        </div>
                    </article>
                </div>
                <div className="espaco"></div>
                <article className="container-fluid pad">
                    <div className="row">
                        <div className="imagemFundo col-lg-6"></div>
                        <div className="texto-nossoIncentivo col-lg-6">
                            <h1>our encouragement</h1>
                            <ul>
                                <li>
                                    <p>1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </li>
                                <li>
                                    <p>2 - Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </li>
                                <li>
                                    <p> 3- When an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

                <div className="espaco"></div>
                <div className="espaco"></div>
                <div className="espaco"></div>

                <footer className="container-fluid rodape">
                    <h1>start changing the planet in a smart and fun way</h1>
                    <Link to="/signUp">
                        <button>Cadastre-se</button>
                    </Link>
                </footer>

            </>
        )
    }
}
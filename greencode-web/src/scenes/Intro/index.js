import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/navbar'
import Logo from '../../Resource/Image/teste.png';

export default class Intro extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 conteudo-esquerda">
                            <h1>O que é a Green Code?</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                        <div className="col-lg-6 conteudo-direito">
                            <button>Cadastre-se</button>
                        </div>
                    </div>

                    <div className="borda-separadora"></div>

                    <article className="oquesomos ">
                        <h1>how green code works</h1>
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
                    <button>Cadastre-se</button>
                </footer>

            </>
        )
    }
}
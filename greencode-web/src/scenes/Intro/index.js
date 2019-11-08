import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/navbar'
import ImageApp from '../../Resource/Image/movel.png';
import LogoAppStore from '../../Resource/Image/logo-appStore.png';
import LogoGooglePlay from '../../Resource/Image/logo-googlePlay.png';
import ImageTeste1 from '../../Resource/Image/imageTeste1.png';
import ImageTeste2 from '../../Resource/Image/imageTeste2.png';
import iconGit from '../../Resource/Image/vector-git.png';
import iconFacebook from '../../Resource/Image/vector-facebook.png';
import iconIdea from '../../Resource/Image/iconIdea.png';
import iconTime from '../../Resource/Image/iconTime.png';

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
                <div className="container-fluid">
                    <article className="oquesomos ">
                        <div className="espaco"></div>
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <section className="box-nos col-lg-5">
                                <h1>O que somos.</h1>
                                <ul>
                                    <li>
                                        <p>
                                            <img src={iconIdea} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <img src={iconIdea} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <img src={iconTime} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </li>
                                </ul>
                            </section>
                            <div className="col-lg-5 box-motivoGreencode">
                                <h1>Motivo por existirmos</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                </p>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </article>
                    <div className="espaco"></div>
                </div>
                <div className="espaco"></div>
                <section className="container-fluid secao-comofunciona">
                    <h1>Como a Green Code funciona!</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <article className="col-lg-3 box-comofunciona">
                            <h1>Crie sua conta</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                        <article className="col-lg-3 box-comofunciona">
                            <h1>Programa de Pontos</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                        <article className="col-lg-3 box-comofunciona">
                            <h1>Um GreenCoder</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                        <div className="col-lg-1"></div>
                    </div>
                    <ul>
                        <li><button>Cadastre-se</button></li>
                        <li><button>Saiba mais</button></li>
                    </ul>
                </section>

                <div className="espaco"></div>
                <article className="container-fluid section-app">
                    <div className="row">
                        <div className="col-lg-6 banner-app">
                            <img src={ImageApp} />
                        </div>
                        <div className="col-lg-6 box-conteudo-app">
                            <h1>Green Code!</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <ul className="logos-lojas">
                                <li><img src={LogoAppStore} /></li>
                                <li><img src={LogoGooglePlay} /></li>
                            </ul>
                        </div>
                    </div>

                </article>

                <div className="espaco"></div>
                <div className="espaco"></div>

                <section className="container secition-equipe">
                    <h1>Conheça a Equipe da Green Code.</h1>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <article className="col-lg-3 box-equipe">
                            <img src={ImageTeste1} />
                            <h4>Nome do Integrante</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li><img src={iconGit} /></li>
                                <li><img src={iconFacebook} /></li>
                            </ul>
                        </article>
                        <article className="col-lg-3 box-equipe">
                            <img src={ImageTeste2} />
                            <h4>Nome do Integrante</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li><img src={iconGit} /></li>
                                <li><img src={iconFacebook} /></li>
                            </ul>
                        </article>
                        <article className="col-lg-3 box-equipe">
                            <img src={ImageTeste2} />
                            <h4>Nome do Integrante</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li><img src={iconGit} /></li>
                                <li><img src={iconFacebook} /></li>
                            </ul>
                        </article>
                        <div className="col-lg-1"></div>
                    </div>

                    <div className="espaco"></div>

                    <div className="row">
                        <div className="col-lg-1"></div>
                        <article className="col-lg-3 box-equipe">
                            <img src={ImageTeste1} />
                            <h4>Nome do Integrante</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li><img src={iconGit} /></li>
                                <li><img src={iconFacebook} /></li>
                            </ul>
                        </article>
                        <article className="col-lg-3 box-equipe">
                            <img src={ImageTeste2} />
                            <h4>Nome do Integrante</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li><img src={iconGit} /></li>
                                <li><img src={iconFacebook} /></li>
                            </ul>
                        </article>
                        <article className="col-lg-3 box-equipe">
                            <img src={ImageTeste2} />
                            <h4>Nome do Integrante</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li><img src={iconGit} /></li>
                                <li><img src={iconFacebook} /></li>
                            </ul>
                        </article>
                        <div className="col-lg-1"></div>
                    </div>
                </section>

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
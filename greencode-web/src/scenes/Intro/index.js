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

import iconQuemsomos from '../../Resource/Image/iconQuemSomos.png';
import iconValores from '../../Resource/Image/iconValores.jpg';
import iconObjetivo from '../../Resource/Image/iconObjetivo.jpg';

import iconCriarConta from '../../Resource/Image/iconCriarConta.png';
import iconLocalização from '../../Resource/Image/iconLocalizacao.png';
import iconPontos from '../../Resource/Image/iconPontos.png';

import iconGarrafaPet from '../../Resource/Image/iconGarrafaPet.png';
import iconGarrafaVidro from '../../Resource/Image/iconGarrafaVidro.png';

// import bannerQuemSomos from '../../Resource/Image/banner-quemsomos.png';

import logoIfood from '../../Resource/Image/logoIfood.png';
import logoPaoAcucar from '../../Resource/Image/logoPaoAcucar.png';
import logoSabesp from '../../Resource/Image/logoSabesp.png';
import logoUber from '../../Resource/Image/logoUber.png';

import iconInsta from '../../Resource/Image/instagram.png';
import iconFace from '../../Resource/Image/facebook.png';

export default class Intro extends Component {

    componentDidMount() {
        if(localStorage.getItem('user') !== null) {
            this.props.history.push('/dashboard')
        }
    }

    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid wallpaper-intro">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10 conteudo-intro">
                            <h1>Somos a <br /><div className="green-primary">Green Code?</div></h1>
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
                                <ul>
                                    <li>
                                        <img src={iconQuemsomos} />
                                        <h2>Quem Somos</h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </li>
                                    <li>
                                        <img src={iconValores} />
                                        <h2>Nossos Valores</h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </li>
                                    <li>
                                        <img src={iconObjetivo} />
                                        <h2>Nosso Objetivo</h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </li>
                                </ul>
                            </section>
                            <div className="col-lg-6 box-motivoGreencode">
                                <h1>Junte-se a <br />Green Code</h1>
                            </div>
                        </div>
                    </article>
                    <div className="espaco"></div>
                </div>
                <div className="espaco"></div>
                <section className="container-fluid secao-comofunciona">
                    <h1>Como funciona a Green Code?</h1>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <section className="col-lg-5 como-funciona-explicacao">
                            <ul>
                                <li>
                                    <img src={iconCriarConta} />
                                    <p>
                                        Cadastre-se na Green Code
                                    </p>
                                </li>
                                <li>
                                    <img src={iconLocalização} />
                                    <p>
                                        Encotre pontos de coleta Próximo de voce para reciclar.
                                    </p>
                                </li>
                                <li>
                                    <img src={iconPontos} />
                                    <p>
                                        A cada material reciclado ganhe pontos para trocar por produtos/serviços.
                                    </p>
                                </li>
                            </ul>
                        </section>
                        <div className="col-lg-6 banner-app"></div>
                    </div>
                    <div className="row">
                        <footer className="col-lg-12 rodape-comofunciona">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-7 texto-rodape">
                                    <img src={iconQuemsomos} />
                                    <h1>
                                        Cadastre-se já na Green Code, e deixe o mundo mais green.
                                    </h1>
                                </div>
                                <div className="col-lg-3 btn-signUp-large">
                                    <button className="btn-orange">Cadastre-se</button>
                                </div>
                                <div className="col-lg-1"></div>
                            </div>
                        </footer>
                    </div>
                </section>
                <section className="container-fluid section-oque-reciclamos">
                    <div className="row">
                        <div className="col-lg-5 banner-oquereciclamos"> </div>
                        <article className="col-lg-7 explicacao-reciclar">
                            <h1>Porque reciclar?</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <h1>O que a Green Code <br />recicla?</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="iconsReciclagem">
                                <ul>
                                    <li>
                                        <img src={iconGarrafaPet} />
                                        <p>
                                            A cada garrafas pet reciclada voce ganha 15 Pontos Green.
                                        </p>
                                    </li>
                                    <li>
                                        <img src={iconGarrafaVidro} />
                                        <p>
                                            A cada garrafa de vidro reciclada voce ganha 30 Pontos Green.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

                <div className="espaco"></div>

                <article className="container-fluid secao-marcas">
                    <h1>Marcas que apoia a Green Code.</h1>
                    <center>
                        <ul className="logoMarcas">
                            <li><img src={logoIfood} /></li>
                            <li><img src={logoPaoAcucar} /></li>
                            <li><img src={logoSabesp} /></li>
                            <li><img src={logoUber} /></li>
                        </ul>
                    </center>
                </article>


                <div className="espaco"></div>

                <section className="container-fluid secition-equipe">
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

                <footer className="container-fluid faleconos-explicacao">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <article className="col-lg-5 box-mesagem">
                            <h1>
                                Fale com a <br />equipe da<br /> Green Code
                            </h1>
                            <p>
                            Tem alguma dúvida, esta querendo ser nosso parceiro
                            só nos mandar seu questionamento e nossa equipe entrara em contato com voce.
                            </p>
                        </article>
                        <div className="col-lg-1"></div>
                        <article className="col-lg-5 formulario-faleconosco">
                            <form>
                                <input className="form-arredondado" type="text" placeholder="Nome Completo" />
                                <input className="form-arredondado" type="text" placeholder="Nome Completo" />
                                <select className="form-arredondado">
                                    <option value="">Qual o assunto?</option>
                                </select>
                                <textarea className="form-arredondado" placeholder="Escreva algo sobre o assunto que esta enviando.">

                                </textarea>
                                <input className="btn-form-arredondado" type="submit" value="Enviar Mensagem" />
                            </form>
                        </article>
                    </div>                    
                </footer>

            </>
        )
    }
}
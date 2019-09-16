import React, { Component } from 'react';

export default class Slide extends Component {
    render() {
        return (
            <>
                <div className="container-fluid background-home wallpaper-home">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 info-banner">
                            <h1 className="title-big">What is Lorem Ipsum</h1>
                            <p className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <button type="button" className="btn btn-lg button-big">Botão primário</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
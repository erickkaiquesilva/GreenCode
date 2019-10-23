import React, { Component } from "react";
import troph_icon from "../../../Resource/Image/trophy_icon.png";
import { balanceMock } from "../../../Actions/requetMock";

export default class TimeLine extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12 progreco">
                        <h1>Hi User, you are starting to be a greener person!</h1>
                        <div className="boxProgress">
                            <div className="image_timeline">
                                <img src={troph_icon} alt="Icon" />
                            </div>
                            <h4>Beginner</h4>
                        </div>
                        <div className="boxProgress">
                            <div className="image_timeline">
                                <img src={troph_icon} alt="Icon" />
                            </div>
                            <h4>Green leaves</h4>
                        </div>
                        <div className="boxProgress">
                            <div className="image_timeline">
                                <img src={troph_icon} alt="Icon" />
                            </div>
                            <h4>Fresh air</h4>
                        </div>
                        <div className="boxProgress">
                            <div className="image_timeline">
                                <img src={troph_icon} alt="Icon" />
                            </div>
                            <h4>Being green is my style</h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
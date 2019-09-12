import React, { Component } from 'react';
import SectionCard from '../ui/section-one'
import SectionInfo from '../ui/section-two'

class Home extends Component {
    render() {
        return (
            <>
                <div className="container text-center">
                    <h1 className="title-left title-full pad-full">Comece a <span className="text-bold">reciclar !</span></h1>
                    <p className="title-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                        <SectionCard />
                        <SectionCard />
                        <SectionCard />
                    </div>
                    <div className="row">
                        <SectionCard />
                        <SectionCard />
                    </div>
                    <div className="row">
                        <SectionInfo />
                    </div>
                </div>
            </>
        );
    };
};

export default Home
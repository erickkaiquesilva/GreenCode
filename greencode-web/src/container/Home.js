import React, { Component } from 'react';
import SectionCard from '../../ui/Home/section-one'
import SectionInfo from '../../ui/Home/section-two'
import MenuNav from '../../ui/Menu/menu'
import Slide from '../../ui/Home/slider'

class Home extends Component {
    render() {
        return (
            <>
                <MenuNav />
                <Slide />
                <div className="container-fluid">
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
                </div>

            </>
        );
    };
};

export default Home
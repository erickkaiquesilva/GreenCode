import React, { Component } from 'react';
import HomeCard from '../ui/section-one'

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
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                    </div>
                    <div className="row">
                        <HomeCard />
                        <HomeCard />
                    </div>
                </div>
            </>
        );
    };
};

export default Home
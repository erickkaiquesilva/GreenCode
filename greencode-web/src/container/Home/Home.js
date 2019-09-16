import React, { Component } from 'react';
import Sections from '../Home/ComponentsHome';
import MenuNav from '../../ui/Menu/menu';
import Slide from '../../ui/Home/slider';

class Home extends Component {
    render() {
        return (
            <>
                <MenuNav />
                <Slide />
                <Sections />
            </>
        );
    };
};

export default Home;
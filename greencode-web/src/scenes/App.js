import React from 'react';
import logo from '../images/logo.svg';
import '../style/style.css';
import MenuNav from '../ui/menu'
import Slide from '../ui/slider'
import Home from '../container/Home'

function App() {
  return (
    <>
        <MenuNav />
        <Slide />
    <div className="container-fluid">
        <Home />
    </div>
    </>
  );
}

export default App;

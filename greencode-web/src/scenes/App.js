import React from 'react';
import logo from '../images/logo.svg';
import '../style/style.css';
import Home from '../container/Home/Home'
import Login from '../container/Login'
import SignUp from '../container/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';

import Teste from './Intro/index';

// ROTAS
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// STYLE
import '../Resource/style/style.css'
import '../Resource/style/normalize.css'

function App() {
  return (
    <Teste />
    // <BrowserRouter>
    //   <Route path="/" exact component={Home} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/signup" component={SignUp} />
    // </BrowserRouter>
  );
}

export default App;

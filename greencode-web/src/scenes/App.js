import React from 'react';

import Teste from './Intro/index';
import Teste2 from './SignIn/signin';
import Teste3 from './SignUp/signup';

// ROTAS
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// STYLE
import '../Resource/style/style.css'
import '../Resource/style/normalize.css'

function App() {
  return (
    <Teste2 />
    // <BrowserRouter>
    //   <Route path="/" exact component={Home} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/signup" component={SignUp} />
    // </BrowserRouter>
  );
}

export default App;

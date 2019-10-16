import React from "react";

import Home from "./Intro/index";
import SignIn from "./SignIn/signin";
import SignUp from "./SignUp/signup";
import Dashboard from "./Dashboard/dashboard";

// ROTAS
import { BrowserRouter, Switch, Route } from "react-router-dom";

// STYLE
import "../Resource/style/style.css";
import "../Resource/style/normalize.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//componentes
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
        <Route exact path="/proyectos" component={Proyectos}></Route>  
      </Switch>
    </Router>
  );
}

export default App;

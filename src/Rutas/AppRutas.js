import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componente
import App from '../App';
import Registro from '../Registro/Registro';
import Home from '../WebInicio/Home';
import Form from '../RegistroIncidente/Form';

const AppRutas = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Registro} />
      <Route exact path="/incidentes" component={Home} />
      <Route exact path="/InsertarIncidencia" component={Form} />
    </Switch>

  </App>;

export default AppRutas;

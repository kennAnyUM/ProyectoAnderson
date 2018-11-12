import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componente
import App from '../App';
import Registro from '../Registro/Registro';
import Home from '../WebInicio/Home';
import Form from '../RegistroIncidente/Form';
import AsignacionIncidencia from '../RegistroIncidente/AsignacionIncidencia';
import Configuracion from '../configuracion/Perfil';
import GetAdmin from '../Administrator/GetAdmin';
import BlockUser from '../Administrator/Block_User';
import sidebar from '../components/SidebarAdmin';
import InformacionIncidencia from '../RegistroIncidente/InformacionIncidencia';
import AdminArea from  '../Administrator/AdminArea';
import AdminTech from  '../Administrator/AdminTech';
import ForgotPass from  '../WebInicio/Recovery';


const AppRutas = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Registro} />
      <Route exact path="/incidentes" component={Home} />
      <Route exact path="/InsertarIncidencia" component={Form} />
      <Route exact path="/AjustePerfil" component={Configuracion} />
      <Route exact path="/getAdmin" component={GetAdmin} />
      <Route exact path="/BlockUser" component={BlockUser} />
      <Route exact path="/AsignacionIncidencia" component={AsignacionIncidencia} />
      <Route exact path="/AdminArea" component={AdminArea} />
      <Route exact path="/AdminTech" component={AdminTech} />
      <Route exact path="/ForgotPass" component={ForgotPass} />
      <Route exact path="/InformacionIncidencia" component={InformacionIncidencia} />
    </Switch>

  </App>;

export default AppRutas;

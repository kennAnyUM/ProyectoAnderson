import './estilo.css';
import React from 'react';


class navigatiom extends React.Component {
  render() {
    return (
      <nav className="container-fluid navbar navbar-expand-lg navbar-light" id="nav">
        <a className="navbar-brand" href="#"><img src={require("./imagenesImpesa/ICONO ANDERSON1.png")}width="35" height="35"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Crear Incidencia</a>
            </li>
            <li className="nav-item dropdown">
            
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Configuracion</a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a className="mr-sm-4" type="text" >Maria Jose Brenes</a>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Cerrar Sesion</button>
          </form>
        </div>
      </nav>
    );
  }
}
export default navigatiom;
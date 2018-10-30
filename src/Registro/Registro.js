import React, { Component } from 'react';
import './Registro.css';
import logo from './user.png';
import { Link } from "react-router-dom";
import Background from '../components/Background';

class registroColaborador extends Component {

    render() {
        return (
            <div className="App">
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
                <Background/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-lg-4">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Correo electronico</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">Ejemplo@impesa.net.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Nombre</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <div className="form-group">
                                    <label for="apellidoUsuario">Primer apellido</label>
                                    <input type="text" className="form-control" id="apellidoUsuario" placeholder="Apellido"></input>
                                </div>
                                <div className="form-group">
                                    <label for="segundoApellidoUsuario">Segundo apellido</label>
                                    <input type="text" class="form-control" id="segundoApellidoUsuario" placeholder="Segundo apellido"></input>
                                </div>
                                <fieldset className="form-group">
                                    <legend>Tipo usuario</legend>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked></input>Interno</label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"></input>Externo</label>
                                    </div>
                                </fieldset>
                                <div className="form-group">
                                    <label for="contraseñaRegistro">Contraseña</label>
                                    <input type="password" class="form-control" id="contraseñaRegistro" placeholder="Contraseña"></input>
                                </div>
                                <div class="form-group">
                                    <label for="confirnContraseña">Contraseña</label>
                                    <input type="password" class="form-control" id="confirnContraseña" placeholder="Confirmación contraseña"></input>
                                </div>

                                <button className="btn btn-primary">Registrar</button>
                            </form>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-lg-4">
                        </div>
                        <div className="col-xs-4 col-sm-4 col-lg-4">
                            <form>
                                <div className="form-group">
                                    <label>Ya posee una cuenta?</label><br></br>
                                    <img src={logo} alt="logo" width="200px" /><br></br>
                                </div>
                                <div className="form-group">
                                    <label for="emailLogin">Correo electronico</label>
                                    <input type="email" className="form-control" id="emailLogin" aria-describedby="correoLogin" placeholder="Enter email"></input>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="passwordlogin" id="passwordLogin" placeholder="Contraseña"></input><br></br>
                                    <Link to="/incidentes"><button className="btn btn-primary">Ingresar</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default registroColaborador;
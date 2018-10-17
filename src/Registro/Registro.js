import React, { Component } from 'react';
import './Registro.css';
import logo from './user.png';
import { Link } from "react-router-dom";

class registroColaborador extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                        <p>Registro Incidencia</p>
                    </header>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-5 col-sm-5 col-lg-5">
                            <div className="containerDiv">
                                <h3>Ingrese los datos requridos para completar el registro.</h3>
                                <input type="email" name="email" id="email" placeholder="Email" required></input><br></br>

                                <input type="text" name="name" id="name" placeholder="Nombre"></input><br></br>

                                <input type="text" name="apellido" id="apellido" placeholder="Primer apellido"></input><br></br>

                                <input type="text" name="segundoApellido" id="segundoApellido" placeholder="Segundo apellido"></input><br></br>
                                <label>Tipo de usuario: </label>
                                <input type="checkbox" name="Empresa1" value="Interno"/>Interno
                                <input type="checkbox" name="Empresa2" value="Externo"/>Externo

                                <input type="text" name="empresaExterna" id="empresaExterna" placeholder="Empresa externa"></input><br></br>

                                <input type="password" name="password" id="password" placeholder="Contraseña"></input><br></br>

                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña"></input><br></br>
                                <button type="submit">Entrar</button>
                            </div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-2">
                        </div>
                        <div className="col-xs-5 col-sm-5 col-lg-5">
                            <div className="divLogin">
                                <header className="App-header-registro">
                                    <br></br>
                                </header>
                                <label>Ya posee una cuenta?</label><br></br>
                                <img src={logo} alt="logo" width="200px" />
                                <input className="inputLogin" type="email" name="emailLogin" id="emailLogin" placeholder="Email"></input><br></br>
                                <input className="inputLogin" type="password" name="passwordlogin" id="passwordLogin" placeholder="Contraseña"></input><br></br>
                                <Link to="/incidentes"><button>Ingresar</button></Link>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default registroColaborador;

import React, { Component } from 'react';
import './Registro.css';
import logo from '../user.png';

class registroColaborador extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-7 col-sm-7 col-lg-7">
                        <div className="containerDiv">
                            <header className="App-header-registro">
                                <br></br>
                            </header>
                            <input type="email" name="email" id="email" placeholder="Email"></input><br></br>

                            <input type="text" name="name" id="name" placeholder="Nombre"></input><br></br>

                            <input type="text" name="apellido" id="apellido" placeholder="Primer apellido"></input><br></br>

                            <input type="text" name="segundoApellido" id="segundoApellido" placeholder="Segundo apellido"></input><br></br>
                            <label>Tipo de usuario: </label>
                            <select className="styled-select rounded">
                                <option value="Interno">Interno</option>
                                <option value="Externo">Externo</option>
                            </select><br></br>

                            <input type="text" name="empresaExterna" id="empresaExterna" placeholder="Empresa externa"></input><br></br>

                            <input type="password" name="password" id="password" placeholder="Contraseña"></input><br></br>

                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña"></input><br></br>
                            <button type="submit">Registrar</button>
                        </div>
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
                            <button type="submit">Entrar</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default registroColaborador;

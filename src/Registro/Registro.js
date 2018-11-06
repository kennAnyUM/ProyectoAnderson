import React, { Component } from 'react';
import './Registro.css';
import logo from './user.png';
import { Link } from "react-router-dom";
import Background from '../components/Background';
import axios from 'axios';

class registroColaborador extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nombre: '',
            apellido: '',
            segundoApellido: '',
            habilitado: true,
            contraseña: '',
            optionsRadios: '',
            rol_usuario: 'Administrador'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        this.setState({
            [nameInput]: valueInput
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const colaborador = {
            email: this.state.email,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            segundoApellido: this.state.segundoApellido,
            habilitado: this.state.habilitado,
            contraseña: this.state.contraseña,
            optionsRadios: this.state.optionsRadios,
            rol_usuario: this.state.rol_usuario

        };

        axios.post(`https://localhost:44384/api/Registro`, { colaborador })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (

            <div className="App">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <Background />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-lg-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="InputEmail">Correo electronico</label>
                                    <input type="email" className="form-control" name="email" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}></input>
                                    <small id="emailHelp" className="form-text text-muted">Ejemplo@impesa.net.</small>
                                </div>
                                <div className="form-group">
                                    <label for="nombreUsuario">Nombre</label>
                                    <input type="password" className="form-control" name="nombre" id="nombreUsuario" placeholder="Ingrese su nombre" value={this.state.nombre} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label for="apellidoUsuario">Primer apellido</label>
                                    <input type="text" className="form-control" name="apellido" id="apellidoUsuario" placeholder="Primer apellido" value={this.state.apellido} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label for="segundoApellidoUsuario">Segundo apellido</label>
                                    <input type="text" class="form-control" name="segundoApellido" id="segundoApellidoUsuario" placeholder="Segundo apellido" value={this.state.segundoApellido} onChange={this.handleChange}></input>
                                </div>
                                <fieldset className="form-group">
                                    <legend>Tipo usuario</legend>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="I" checked onChange={this.handleChange}></input>Interno</label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="E" onChange={this.handleChange}></input>Externo</label>
                                    </div>
                                </fieldset>
                                <div className="form-group">
                                    <label for="contraseñaRegistro">Contraseña</label>
                                    <input type="password" class="form-control" name="contraseña" id="contraseñaRegistro" placeholder="Contraseña" value={this.state.contraseña} onChange={this.handleChange}></input>
                                </div>
                                <div class="form-group">
                                    <label for="confirnContraseña">Contraseña</label>
                                    <input type="password" class="form-control" name="contraseñaConfirmacion" id="confirnContraseña" placeholder="Confirmación contraseña"></input>
                                </div>

                                <button className="btn btn-primary" type="submit" value="sumit">Registrar</button>
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

                    <br /><br /><br />
                </div>
            </div>
        )
    }
}

export default registroColaborador;
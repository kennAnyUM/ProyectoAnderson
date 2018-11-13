import React, { Component } from 'react';
import './Registro.css';
import { Link } from "react-router-dom";
import Background from '../components/Background';
import axios from 'axios';
import Nav from '../components/NavigationUnregistred';

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
                <Nav />
                <br /><br /><br /><br />
                <div className="container">
                <h3>Datos Personales</h3>
                <br></br>
                    <div className="row">
                        <div className="col-md-6 mb-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label for="nombreUsuario">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" id="nombreUsuario" placeholder="Ingrese su nombre" value={this.state.nombre} onChange={this.handleChange}></input>
                                        <br></br>
                                        <label for="apellidoUsuario">Primer apellido</label>
                                        <input type="text" className="form-control" name="apellido" id="apellidoUsuario" placeholder="Primer apellido" value={this.state.apellido} onChange={this.handleChange}></input>
                                        <br></br>
                                        <label for="segundoApellidoUsuario">Segundo apellido</label>
                                        <input type="text" className="form-control" name="segundoApellido" id="segundoApellidoUsuario" placeholder="Segundo apellido" value={this.state.segundoApellido} onChange={this.handleChange}></input>
                                        <br></br>
                                        <label for="InputEmail">Correo electrónico </label>
                                        <input type="email" className="form-control" name="email" id="InputEmail" aria-describedby="emailHelp" placeholder="Ejemplo@impesa.net." value={this.state.email} onChange={this.handleChange}></input>
                                        <br></br>
                                        <label for="contraseñaRegistro">Contraseña</label>
                                        <input type="password" className="form-control" name="contraseña" id="contraseñaRegistro" placeholder="Contraseña" value={this.state.contraseña} onChange={this.handleChange}></input>
                                        <br></br>
                                        <label for="confirnContraseña">Contraseña</label>
                                        <input type="password" class="form-control" name="contraseñaConfirmacion" id="confirnContraseña" placeholder="Confirmación contraseña"></input>
                                        <br></br>
                                        <legend>Tipo usuario</legend>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="I" checked onChange={this.handleChange}></input>Interno</label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="E" onChange={this.handleChange}></input>Externo</label>
                                        </div>
                                        <br></br>
                                        <button className="btn btn-primary" type="submit" value="sumit">Registrar</button>

                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-2 mb-2"></div>

                        <div className="col-md-4 mb-4">

                            <br /><br /><br /><br />
                            <img src={require("../components/imagenesImpesa/ICONO ANDERSON1.png")} width="255" />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default registroColaborador;
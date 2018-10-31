import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AjustesPerfil extends Component {

    render() {
        return (

            <div className="container ">
                <div className="row  mt-4">
                    <div className="col mt-4 ">
                        <br /><br />
                        <div>
                            <h3>Cambiar nombre</h3>
                            <div class="form-row">

                                <div class="col-md-4 mb-3">

                                    <label for="validationCustom01">Nombre</label>
                                    <input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" />

                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationCustom02">Primer Apellido</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Primer Apellido" />

                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationCustom02">Segundo Apellido</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Segundo Apellido" />
                                </div>

                                <button class="btn btn-danger" type="submit">Cancelar</button>
                                <button class="btn btn-primary" type="submit">Guardar</button>

                            </div>

                        </div>

                        <div className="border-top mt-4 md-3">
                            <h3  className=" mt-4">Cambiar contraseña</h3>
                            <div class="form-row">

                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom03">Contraseña actual</label>
                                    <input type="text" class="form-control" id="validationCustom03" placeholder="Contraseña actual" />
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom04">Contraseña nueva</label>
                                    <input type="text" class="form-control" id="validationCustom04" placeholder="Mínimo 8 caracteres" />
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
      </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom05">Repetir contraseña</label>
                                    <input type="text" class="form-control" id="validationCustom05" placeholder="Repetir contraseña" />
                                    <div class="invalid-feedback">
                                        Please provide a valid zip.
      </div>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-danger" type="submit">Cancelar</button>
                        <button class="btn btn-primary" type="submit">Guardar</button>


                    </div>

                </div>

            </div>
        )
    }
}

export default AjustesPerfil;
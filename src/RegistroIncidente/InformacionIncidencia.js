import React from 'react';
import Navigation from '../components/Navigation';

class InformacionIncidencia extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="container-fluid">
                <Navigation />
                <form className="container" >

                    <fieldset className="fields">
                        <header className="App-header">
                            <br /><br /><br />
                            <h3 className="mt-4">Informacion Incidencia</h3>
                        </header>
                        <div>
                            <br></br>
                            {BodyInformation()}
                            <div class="pagination justify-content-end">
                                <button class="btn btn-light  " type="submit">Agregar Pasos</button>
                                <button class="btn btn-primary" type="submit">Finalizar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>

            </div>
        )
    }
}


function BodyInformation() {
    return (

        <div className="container">

            <div className="row">

                <div className="col-xs-4 col-md-4">

                    <div className="Container-div">

                        <div className="form-group blue-border-focus">
                            <label>Duenno Asignacion</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                            <br></br>
                            <br></br>
                            <label>Impacto incidencia</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                            <br></br>
                            <br></br>
                            <label>Tecnologia incidencia</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                        </div>

                    </div>

                </div>

                <div className="col-xs-4 col-md-4">

                    <div className="Container-div">

                        <div className="form-group blue-border-focus">
                            <label>Tipo incidencia</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                            <br></br>
                            <br></br>
                            <label>Fecha incidencia</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                        </div>

                    </div>

                </div>


                <div className="col-xs-4 col-md-4">

                    <div className="Container-div">

                        <div className="form-group blue-border-focus">
                            <label>Estado Actual</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                            <br></br>
                            <br></br>
                            <label>Area incidencia</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                            <br></br>
                            <br></br>
                            <label>Grado incidencia</label>
                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly" />
                        </div>

                    </div>

                </div>

            </div>

        </div>


    );
}


export default InformacionIncidencia;


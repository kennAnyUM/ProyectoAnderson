import React from 'react';
import Navigation from '../components/Navigation';
import Modal from 'react-responsive-modal';

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
                            
                        </div>
                    </fieldset>
                </form>
                <BodyInformation />
            </div>
        )
    }
}


class BodyInformation extends React.Component {
  
        state = {
            open: false
        };
    

    onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {

        const { open } = this.state;

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
                                <br></br>
                                <br></br>
                                <div class="pagination justify-content-end">
                                <button onClick={this.onOpenModal}>Insertar Pasos</button>
                                    <button class="btn btn-primary" type="submit">Finalizar</button>
                                    <Modal open={open} onClose={this.onCloseModal} center>
                                    <h2>INNSERTAR PASOS</h2>
                                    </Modal>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        )
    }
}



export default InformacionIncidencia;


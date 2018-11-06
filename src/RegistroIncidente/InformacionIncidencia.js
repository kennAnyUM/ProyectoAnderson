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
                <div class="pagination justify-content-end">
                  <button class="btn btn-light  " type="submit">Cancelar</button>
                  <button class="btn btn-primary" type="submit">Notificar</button>
                </div>
              </div>
            </fieldset>
          </form>
  
        </div>
      )
    }
  }


  export default InformacionIncidencia;


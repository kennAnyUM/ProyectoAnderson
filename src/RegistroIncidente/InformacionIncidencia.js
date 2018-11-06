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
                {BodyInformation()}
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


  function BodyInformation() {
    return (
  
      <div className="container">
  
        <div className="row">
  
          <div className="col-xs-12 col-md-12">
  
            <div className="Container-div">
  
              <div className="form-group blue-border-focus">
                <label for="exampleFormControlTextarea5">Inserte la descripción de la incidencia</label>
                <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
  
  
    );
  }


  export default InformacionIncidencia;


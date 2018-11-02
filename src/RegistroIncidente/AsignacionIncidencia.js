import React from 'react';
import Navigation from '../components/Navigation';


class AsignacionIncidencia extends React.Component {
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
              <h3 className="mt-4">Asignar Incidencia</h3>
            </header>
            <div>
              {FilterUser()}
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

function FilterUser() {
  return (

    <div className="container">

      <div className="row">

        <div className="col-xs-12 col-md-12">

          <div className="Container-div">

            <div >

              <label for="exampleFormControl">Filtrar Incidencia</label>

              <label class="checkbox-inline"> <input type="checkbox" value=""/>Bases de Datos</label>
              <label class="checkbox-inline"> <input type="checkbox" value=""/>Redes</label>
              <label class="checkbox-inline"> <input type="checkbox" value=""/>Desarrollo</label>
              <label class="checkbox-inline"> <input type="checkbox" value=""/>Infraestructura</label>

            </div>

          </div>

        </div>

      </div>

    </div>


  );
}


export default AsignacionIncidencia;
import React from 'react';
import Navigation from '../components/Navigation';
import App from '../Reportes/Grafico';
import App1 from '../Reportes/Grafico1';
import Funnel from '../Reportes/Grafico2';

class MenuReportes extends React.Component {
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
              <h3 className="mt-4">Seleccione el reporte</h3>
            </header>
            <div>
              {SelectGraph()}
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



function SelectGraph() {
  return (

    <div className="container">

      <div className="row">

        <div className="col-xs-6 col-md-6">

          <div className="Container-div">

            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#menu1">Menu 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#menu2">Menu 2</a>
              </li>
            </ul>


            <div class="tab-content">

              <div id="home" class="container tab-pane active"><br></br>
                <h3>Reporte1</h3>
                <App />
              </div>

              <div id="menu1" class="container tab-pane fade"><br></br>
                <h3>Reporte 2</h3>
                <App1 />
              </div>

              <div id="menu2" class="container tab-pane fade"><br></br>
                <h3>Reporte 3</h3>
                <Funnel />
              </div>


            </div>

          </div>

        </div>

      </div>

    </div>


  );
}


export default MenuReportes;
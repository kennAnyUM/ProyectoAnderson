import React from 'react';
import './Form.css';
import 'react-day-picker/lib/style.css';
import { Button } from 'reactstrap';

class Form extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>  
        <fieldset className="fields">
          <div>
            <Select />
            {MyTextArea()}
            {MyNotificationButton()}
          </div>
        </fieldset>
        <br></br>
        <br></br>  
      </form>
    )
  }
}

class Select extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tech: 'Incidencia',
      tech2: 'Impacto',
      tech3: 'Area',
      tech4: 'Tecnologia Afectada',
      tech5: 'Grado Control'
    };
  }

  handleChange(e) {
    this.setState({
      tech: e.target.value
    })
  }

  handleChange2(e) {
    this.setState({
      tech2: e.target.value
    })
  }

  handleChange3(e) {
    this.setState({
      tech3: e.target.value
    })
  }

  handleChange4(e) {
    this.setState({
      tech4: e.target.value
    })
  }

  handleChange5(e) {
    this.setState({
      tech5: e.target.value
    })
  }



  render() {

    const tIncidencias = ["Desactualizacion de software", "Infiltracion de la red", "Inyeccion de codigo", "Perdida de archivos"];

    const listaIncidencias = tIncidencias.map((incidencia) =>
      <option value={incidencia}>{incidencia}</option>
    );

    const impIncidencias = ["Grave", "Medio", "Bajo", "Sin Impacto"];

    const listaImpacto = impIncidencias.map((impacto) =>
      <option value={impacto}>{impacto}</option>
    );

    const areaIncidencias = ["Cloud", "Area Desarrollo", "Servidores Externos", "Centro De Redes"];

    const listaAreas = areaIncidencias.map((area) =>
      <option value={area}>{area}</option>
    );

    const tecAfectada = ["Router Cisco", "Gestor BD", "Servidor A-97r", "Azure"];

    const listaTecno = tecAfectada.map((tecnologia) =>
      <option value={tecnologia}>{tecnologia}</option>
    );

    const gradoControl = ["Control interno", "Asesoria", "Outsorcing", "Ente Estatal"];

    const listaControl = gradoControl.map((control) =>
      <option value={control}>{control}</option>
    );

    return (

      <div className="container">

        <div className="row">

          <div className="col-xs-4 col-md-4">

            <div className="Container-div">

              <h5 className="H5-form">Impacto incidencia *</h5>
              <select className="selectToForm" id="lang2" onChange={this.handleChange2.bind(this)} value={this.state.tech2}>
                {listaImpacto}
              </select>
              <h4 className="H4-form">{this.state.tech2}</h4>

              <br></br>

              <h5 className="H5-form">Tecnología afectada *</h5>
              <select className="selectToForm" disabled="false" id="lang4" onChange={this.handleChange4.bind(this)} value={this.state.tech4}>
                {listaTecno}
              </select>
              <h4 className="H4-form">{this.state.tech4}</h4>

            </div>

          </div>

          <div className="col-xs-4 col-md-4">

            <div className="Container-div">

              <h5 className="H5-form">Tipo incidencia *</h5>
              <select className="selectToForm" id="lang" onChange={this.handleChange.bind(this)} value={this.state.tech}>
                {listaIncidencias}
              </select>
              <h4 className="H4-form">{this.state.tech}</h4>

              <br></br>

              <h5 className="H5-form">Fecha de descubrimiento *</h5>
              {MyDatePicker()}

            </div>

          </div>

          <div className="col-xs-4 col-md-4">

            <div className="Container-div">

              <h5 className="H5-form">Área incidencia *</h5>
              <select className="selectToForm" id="lang3" onChange={this.handleChange3.bind(this)} value={this.state.tech3}>
                {listaAreas}
              </select>
              <h4 className="H4-form">{this.state.tech3}</h4>

              <br></br>

              <h5 className="H5-form">Grado de control *</h5>
              <select className="selectToForm" id="lang5" onChange={this.handleChange5.bind(this)} value={this.state.tech5}>
                {listaControl}
              </select>
              <h4 className="H4-form">{this.state.tech5}</h4>

            </div>

          </div>

        </div>

      </div>

    )
  }
}

function MyDatePicker() {
  return (
    <input className="selectDateTime" type="datetime-local" id="example-date-input" />
  );
}

function MyTextArea() {
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

function MyNotificationButton() {
  return (

    <div className="container">

    <div className="row">

      <div className="col-xs-3 col-md-3"></div>
      
      <div className="col-xs-3 col-md-3"></div>

      <div className="col-xs-1 col-md-1">

        <div className="Container-div">

          <div >
            <Button className="abarcadoBotonNotificar" rounded gradient="purple">Notificar</Button>
          </div>

        </div>

      </div>

      

    </div>

  </div>
  );
}



export default Form;
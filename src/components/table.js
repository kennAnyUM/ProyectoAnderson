import React, { Component } from 'react';
import { incidents } from './bd/incident.json';


class IncidentCard extends Component {
  constructor() {
    super();
    this.state = {
      incidents
    }
  }

  render() {
    const incidentCard = this.state.incidents.map((incident) => {
      return (
        <tr>
          <th scope="row">{incident.impactLevel}</th>
          <td>{incident.impactFeasibility}</td>
          <td>{incident.description}</td>
          <td>{incident.date}</td>
        </tr>

      )
    })

    return (
      <table id="tableInci" class="table table-bordered table-light table-striped mt-4">
        <thead className="table-dark" >
          <tr >
            <th>Impacto
            </th>
            <th >Probabilidad de Impacto
            </th>
            <th >Descripción
            </th>
            <th >Fecha de Incidencia
            </th>
          </tr>
        </thead>
        <tbody>
          
          {incidentCard}
        </tbody>

      </table>
    );
  }
}

export default IncidentCard;

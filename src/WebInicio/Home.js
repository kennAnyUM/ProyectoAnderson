import React, { Component } from 'react';
import './Home.css';


import Navigation from '../components/Navigation';
import Menu from '../components/menu.js';

import { incidents } from '../bd/incident.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      incidents
    }
  }

  render() {
    const incidentCard = this.state.incidents.map((incident) => {
      return (
        <div className="col-md-4">
         <br />
          <div className="card mt-4">
            {incident.incidentId}
            <div className="card-header">
              <h3> {incident.impactLevel}</h3>

            </div>
            <div className="card-body">
              {incident.description}
            </div>

          </div>
        </div>

      )
    })

    return (
      <div className="App">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-2 mt-4">
              <br />
              <Menu />
            </div>

            <div className="col ">
              <div className="row mt-4">
                <br /> <br />
                {incidentCard}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

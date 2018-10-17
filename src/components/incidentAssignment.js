import React, { Component } from 'react';
//import './App.css';


import Navigation from './Navigation.js';
import Menu from './menu.js';


class IncidentAssignment extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
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

              

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IncidentAssignment;

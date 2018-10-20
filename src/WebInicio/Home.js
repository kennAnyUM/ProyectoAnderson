import React, { Component } from 'react';
import './Home.css';
import TableIncedents from './components/table.js';

import Navigation from '../components/Navigation';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      incidents
    }
  }

  render() {
    return (
      <div className="App">
        <div >
          <Navigation />
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col mt-4 ">
              <br /><br />
              <TableIncedents />
            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default Home;

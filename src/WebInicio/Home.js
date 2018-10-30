import React, { Component } from 'react';
import './Home.css';
import TableIncedents from '../components/table.js';

import Navigation from '../components/Navigation';


class Home extends Component {

  render() {
    return (
      <div className="App">
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

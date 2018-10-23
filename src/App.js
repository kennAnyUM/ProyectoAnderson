import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Contenedor from './Contenerdor';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <body>
      <div className="container" id="div_ancho_completo">
        <Contenedor body={children}/>
      </div>
      </body>
    );
  }
}

export default App;

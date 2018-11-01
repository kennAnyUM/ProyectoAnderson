import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Contenedor from './Contenerdor';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <body>
        <div className="container-fluid" id="div_ancho_completo">
          <Navigation />
        </div>
        <div className="container" id="div_ancho_completo">
          <Contenedor body={children} />
        </div>
        <Footer />
      </body>
    );
  }
}

export default App;

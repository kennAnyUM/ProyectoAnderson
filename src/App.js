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
<<<<<<< HEAD
         <Navigation />
        <div className="container-fluid" id="div_ancho_completo">
         
          <Contenedor body={children} />
        </div>
       
=======
        <div >
          <Navigation />
        </div>
        <div className="container" id="div_ancho_completo">
          <Contenedor body={children} />
        </div>
>>>>>>> 34f02720ffe4e1a739b4f20815ce1462e89b6042
        <Footer />
      </body>
    );
  }
}

export default App;

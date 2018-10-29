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
        <div >
          <Navigation />
        </div>
        <div className="container" id="div_ancho_completo">
          <Contenedor body={children} />
        </div>
=======
         <Header />
        <div className="container-fluid" id="div_ancho_completo">
         
          <Contenedor body={children} />
        </div>
       
>>>>>>> fcf53fd9fd4079d86ee7c75294b933b108fe2819
        <Footer />
      </body>
    );
  }
}

export default App;

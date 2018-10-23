import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Contenedor from './Contenerdor';
import Header from './components/Navigation';
import Footer from './components/Footer';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
<<<<<<< HEAD
      <div>
        <Header />
=======
      <body>
      <div className="container" id="div_ancho_completo">
>>>>>>> 68400fb5f57d87c839a0c34f546572fe8fc2d998
        <Contenedor body={children}/>
        <Footer />
      </div>
      </body>
    );
  }
}

export default App;

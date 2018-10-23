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
      <div>
        <Header />
        <Contenedor body={children}/>
        <Footer />
      </div>

    );
  }
}

export default App;

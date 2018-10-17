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
      <div>
        <Contenedor body={children}/>
      </div>

    );
  }
}

export default App;

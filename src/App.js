import React, { Component } from 'react';
import './App.css';
import Registro from './component/Registro';
import logo from './IMPESA_SolidPMS.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <Registro />
      </div>
    );
  }
}

export default App;

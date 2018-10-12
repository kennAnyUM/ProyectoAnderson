import React, { Component } from 'react';
import './App.css';
import Registro from './component/Registro';
import logo from './IMPESA_SolidPMS.png';
import logoReact from './logo.svg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
        </header>
        <Registro />
      </div>
    );
  }
}

export default App;

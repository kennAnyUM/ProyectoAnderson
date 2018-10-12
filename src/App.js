import React, { Component } from 'react';
import './App.css';
import Registro from './component/Registro';
import Footer from './component/Footer'
import logoReact from './logo.svg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
        </header>
        <Registro />
        <Footer />
      </div>
    );
  }
}

export default App;

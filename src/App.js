import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './components/map'
import Toolbar from './components/toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">        
          <Toolbar />
          <Map />                
      </div>
    );
  }
}

export default App;

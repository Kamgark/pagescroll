import React, { Component } from 'react';
import './App.css';
import LeftBar from './components/leftbar';
import RightSide from './components/rightside';

class App extends Component {
  
  render() {
    return (
      <div className="layout">
        <LeftBar/>
        <RightSide/>
      </div>
    );
  }
}

export default App;

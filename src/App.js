import React, { Component } from 'react';
import Banner from './Banner'
import Header from './Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Banner/>
        <Header/>
      </div>
    );
  }
}

export default App;

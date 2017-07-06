import React, { Component } from 'react';
import Banner from './Banner'
import Header from './Header'
import Content from './Content'
import Sponsor from './Sponsor'
import Bar from './Bar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="expanded row header">
      <div className="Container">
        <Banner/>
        <Header/>
        <Content/>
        <Bar/>
        <Sponsor/>
      </div>
      </div>
    );
  }
}

export default App;

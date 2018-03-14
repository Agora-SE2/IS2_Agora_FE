import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import './App.css';
import Page from './Page.js';
import Navbar from './Navbar.js';
import Footer from '../components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Page />
        <div className="ui divider"></div>
        <Footer />
      </div>
    );
  }
}

export default App;

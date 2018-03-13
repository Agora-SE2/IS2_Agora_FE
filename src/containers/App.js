import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import Navbar from './Navbar.js';
import Footer from '../components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomePage />
        <div className="ui divider"></div>
        <Footer />
      </div>
    );
  }
}

export default App;

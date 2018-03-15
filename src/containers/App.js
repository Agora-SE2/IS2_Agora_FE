import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import './App.css';
import PageRoute from './PageRoute.js';
import Navbar from './Navbar.js';
import Footer from '../components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PageRoute />
        <Footer />
      </div>
    );
  }
}

export default App;

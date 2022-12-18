import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Social from './components/Social';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
        <Social />
      </div>
    );
  }
}

export default App;

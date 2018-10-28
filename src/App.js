import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import {Invitados, Paralax, Programa} from './components/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Navbar></Navbar>
        <Programa></Programa>
        <Invitados></Invitados>
        <Paralax></Paralax>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

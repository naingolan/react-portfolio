import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//These are for editing the portfolio
import {ChackraProvider} from "@chakra-ui/react";
import Header from "./components/Header"
import LandingSection from "./components/LandingSection"
import ProjectSection from "./components/ProjectSection"
import ContactMeSection from "./components/ContactMeSession"
import Footer from "./components/Footer"



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

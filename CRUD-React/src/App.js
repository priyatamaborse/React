import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CRUD from './CRUD';
import {createBrowserHistory } from "history";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="App">
        <CRUD />
      </div>
    );
  }
}


export default App;


import React, { Component } from "react";
// import axios from 'axios'
import "./App.css";
import Deck from "./components/Deck";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="test">
        <Deck />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Third Wave List</h1>
        <Routes />
        <div className="footer">
          <span>Made with ❤️ by Kristoffer Tjalve and Antal János Monori.</span>
          <br />
          <span>Copyright (c). Third Wave List, 2017. All rights reserved.</span>
        </div>
      </div>
    );
  }
}

export default App;

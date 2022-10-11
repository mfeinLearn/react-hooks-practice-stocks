import { Component } from "react";
import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;

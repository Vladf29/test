import React, { Component } from "react";

import axios from "axios";

import "./App.css";

class App extends Component {
  onClick = () => {
    axios.post("/api", { firstName: "Foo" }).then(res => console.log(res));
  };
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <button onClick={this.onClick} className='btn btn-danger'>Send Request</button>
      </div>
    );
  }
}

export default App;

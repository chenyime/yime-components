import React, { Component } from 'react';
import './App.css';
import { Transfer } from "./components";

class App extends Component {
  render() {
    const data = [
      { key: 0, content: "11111111111111" },
      { key: 1, content: "222222222222222222222" },
      { key: 2, content: "333333333333333333333" },
      { key: 3, content: "444444444444444444444" },
      { key: 4, content: "555555555555555555555" },
      { key: 5, content: "ht5bnn " },
      { key: 6, content: "77777777777777777" },
      { key: 7, content: "88888888888888888888" },
      { key: 8, content: "9999999999" },
      { key: 9, content: "gggggggggggggg" },
      { key: 10, content: "xxxxxxxxxxxxxx" },
      { key: 11, content: "oooooooooooooo" },
      { key: 12, content: "jjjjjjjjjjjjjj" },
      { key: 13, content: "ddddddddddddddddddddddd" },
      { key: 14, content: "lllllllllllll" },
  ];
    return (
      <Transfer items={data} />
    );
  }
}

export default App;

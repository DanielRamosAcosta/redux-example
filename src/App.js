import React, { Component } from 'react';

import { Movie } from "./Movies";

export default class App extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <h1>Nuestra super App</h1>
        <Movie />
      </div>
    );
  }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux";
import { createActionChangeColor } from "./store";

class App extends Component {

  getClassName = () => (`App-color-${this.props.color}`)

  render() {
    console.log(this)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={this.getClassName()}>Color actual: {this.props.color}</p>
        <p>Nombre: {this.props.nombre}</p>
        <button onClick={this.props.changeColorToGreen}>
          Cambiar color a verde
        </button>
        <button onClick={this.props.changeColorToRed}>
          Cambiar color a rojo
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Soy el mapStateToPRops", state)
  return {
    color: state.color,
    nombre: state.nombre
  }
}

const changeColorToRed = () => createActionChangeColor("Rojo")
const changeColorToGreen = () => createActionChangeColor("Verde")

const mapDispatchToProps = {
  changeColorToRed,
  changeColorToGreen
}

const connection = connect(mapStateToProps, mapDispatchToProps)

const AppConnected = connection(App)

export default AppConnected;

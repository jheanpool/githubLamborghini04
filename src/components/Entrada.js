import React, { Component } from "react"
import sonido_entrada from '../sonido_boton/sonido_entrada.mp3';
import entrada from '../fondo_entrada/entrada.jpg';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import './App.css';

export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()
  }

  render() {
    return (

      <div className="imagen_entrada">

        <audio className="audio">
          <source src={sonido_entrada}></source>
        </audio>

        <Link to="/Inicio"><img src={entrada} alt="entrada" height="101%" width="101%" /></Link>

      </div>


    )
  }
}
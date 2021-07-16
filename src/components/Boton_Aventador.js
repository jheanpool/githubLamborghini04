import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import aventador from '../sonido_lamborghini/aventador.mp3';
import './Label.css';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playAventador = this.playAventador.bind(this);
    this.pauseAventador = this.pauseAventador.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playAventador() : this.pauseAventador();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playAventador() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseAventador() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={aventador}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "Play Sound" : "Stop Sound"}</Button>

        </div>
      </div>
    );
  }

}
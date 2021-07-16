import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import murcielago from '../sonido_lamborghini/murcielago.mp3';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playMurcielago = this.playMurcielago.bind(this);
    this.pauseMurcielago = this.pauseMurcielago.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playMurcielago() : this.pauseMurcielago();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playMurcielago() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseMurcielago() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={murcielago}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "play" : "pause"}</Button>

        </div>
      </div>
    );
  }

}
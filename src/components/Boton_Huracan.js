import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import huracan from '../sonido_lamborghini/huracan.mp3';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playHuracan = this.playHuracan.bind(this);
    this.pauseHuracan = this.pauseHuracan.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playHuracan() : this.pauseHuracan();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playHuracan() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseHuracan() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={huracan}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "play" : "pause"}</Button>

        </div>
      </div>
    );
  }

}
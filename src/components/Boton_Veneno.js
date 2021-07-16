import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import veneno from '../sonido_lamborghini/veneno.mp3';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playVeneno = this.playVeneno.bind(this);
    this.pauseVeneno = this.pauseVeneno.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playVeneno() : this.pauseVeneno();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playVeneno() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseVeneno() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={veneno}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "play" : "pause"}</Button>

        </div>
      </div>
    );
  }

}
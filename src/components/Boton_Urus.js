import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import urus from '../sonido_lamborghini/urus.mp3';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playUrus = this.playUrus.bind(this);
    this.pauseUrus = this.pauseUrus.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playUrus() : this.pauseUrus();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playUrus() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseUrus() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={urus}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "play" : "pause"}</Button>

        </div>
      </div>
    );
  }

}
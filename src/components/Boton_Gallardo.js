import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import gallardo from '../sonido_lamborghini/gallardo.mp3';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playGallardo = this.playGallardo.bind(this);
    this.pauseGallardo = this.pauseGallardo.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playGallardo() : this.pauseGallardo();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playGallardo() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseGallardo() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={gallardo}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "play" : "pause"}</Button>

        </div>
      </div>
    );
  }

}
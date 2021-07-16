import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import centenario from '../sonido_lamborghini/centenario.mp3';

export default class extends Component {

  constructor(props) {

    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playCentenario = this.playCentenario.bind(this);
    this.pauseCentenario = this.pauseCentenario.bind(this);

  }

  handleClick = () => {

    this.state.isToggleOn ? this.playCentenario() : this.pauseCentenario();

    this.setState(state => ({

      isToggleOn: !state.isToggleOn
    }));
  }

  playCentenario() {

    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()

  }

  pauseCentenario() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.pause()

  }

  render() {
    return (
      <div>
        <audio className="audio">
          <source src={centenario}></source>
        </audio>

        <div className="boton_tipos_lamborghini">

          <Button onClick={this.handleClick}>{this.state.isToggleOn ? "play" : "pause"}</Button>

        </div>
      </div>
    );
  }

}
import React, { Component } from "react"
import sonido_entrada from '../sonido_boton/sonido_entrada.mp3';


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
        
        </div>

    )
  }
}
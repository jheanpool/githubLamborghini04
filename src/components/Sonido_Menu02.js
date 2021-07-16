import React, { Component } from "react"
import sonido_menu from '../sonido_boton/sonido_menu.mp3';


export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()
  }

  render() {
    return (
     
        <div className="imagen_entrada">

            <audio className="audio">
            <source src={sonido_menu}></source>
            </audio>
        
        </div>

    )
  }
}
import React, { Component } from "react"
import sonido01 from '../sonido_usuario/sonido01.mp3';


export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio")[0]
    audioEl.play()
  }

  render() {
    return (
     
        <div className="imagen_entrada">

            <audio className="audio">
            <source src={sonido01}></source>
            </audio>
        
        </div>

    )
  }
}
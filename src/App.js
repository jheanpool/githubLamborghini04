import React from 'react';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Piezas from './components/Piezas';
import Tapiceria from './components/Tapiceria';
import Motor from './components/Motor';
import Millennio from './components/Millenio';
import VideoJS from './components/VideoJS';
import Terzo01 from './components/Terzo01';
import Terzo02 from './components/Terzo02';
import Terzo03 from './components/Terzo03';
import Terzo04 from './components/Terzo04';
import Terzo05 from './components/Terzo05';
import Terzo06 from './components/Terzo06';
import V12 from './components/V12';
import Galeria from './components/Galeria';
import Aventador from './components/Aventador';
import Boton_Aventador from './components/Boton_Aventador';
import Centenario from './components/Centenario';
import Boton_Centenario from './components/Boton_Centenario';
import Gallardo from './components/Gallardo';
import Boton_Gallardo from './components/Boton_Gallardo';
import Huracan from './components/Huracan';
import Boton_Huracan from './components/Boton_Huracan';
import Murcielago from './components/Murcielago';
import Boton_Murcielago from './components/Boton_Murcielago';
import Urus from './components/Urus';
import Boton_Urus from './components/Boton_Urus';
import Veneno from './components/Veneno';
import Boton_Veneno from './components/Boton_Veneno';
import Ferruccio from './components/Ferruccio';
import Boton_Historia from './components/Boton_Historia';
import Sign_In from './components/Sign_In';
import Sign_Up from './components/Sign_Up';
import Entrada from './components/Entrada';
import Menu_Inicio from './components/Menu_Inicio';
import Entrada_Login from './components/Entrada_Login';
import Menu_Toggle from './components/Menu_Toggle';
import Contacto from './components/Contacto';
import Sonido_Usuario from './components/Sonido_Usuario';
import Sonido_Menu01 from './components/Sonido_Menu01';
import Sonido_Menu02 from './components/Sonido_Menu02';
import Sonido_Menu03 from './components/Sonido_Menu03';
import Sonido_Menu04 from './components/Sonido_Menu04';
import Sonido_Menu05 from './components/Sonido_Menu05';
import Sonido_Menu06 from './components/Sonido_Menu06';
import Sonido_Menu07 from './components/Sonido_Menu07';
import Sonido_Menu08 from './components/Sonido_Menu08';
import Sonido_Entrada from './components/Sonido_Entrada';
import Icono_Cerrar_V12 from './components/Icono_Cerrar_V12';
import Icono_Cerrar_Millennio from './components/Icono_Cerrar_Millennio';
import V12_Miniatura_01 from './components/V12_Miniatura_01';
import V12_Miniatura_02 from './components/V12_Miniatura_02';
import V12_Miniatura_03 from './components/V12_Miniatura_03';
import Mapa from './components/Mapa';
import Entrada_Link from './components/Entrada_Link';
import Footer from './components/Footer';
import Footer01 from './components/Footer01';
import V12_01 from './components/V12_01';
import V12_02 from './components/V12_02';
import V12_03 from './components/V12_03';
import Fondo_Gif from './components/Fondo_Gif';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Entrada_Link />
          </Route>

          <Route exact path="/Login">
            <Sonido_Usuario />
            <Entrada_Login />
            <Menu_Inicio />
          </Route>

          <Route exact path="/Sign_in">
            <Sonido_Usuario />
            <Sign_In />
            <Fondo_Gif />
            <Menu_Inicio />
          </Route>

          <Route exact path="/Sign_Up">
            <Sonido_Usuario />
            <Sign_Up />
            <Fondo_Gif />
            <Menu_Inicio />
          </Route>


          <Route exact path="/Entrada">
            <Sonido_Entrada />
            <Entrada />
          </Route>

          <Route exact path="/Inicio">
            <Sonido_Menu01 />
            <Menu_Toggle />
            <Inicio />
            <Footer />
          </Route>

          <Route path="/Nosotros">
            <Sonido_Menu02 />
            <Menu_Toggle />
            <Contacto />
            <Mapa />
            <Nosotros />
            <Footer />
          </Route>

          <Route path="/Piezas">
            <Sonido_Menu03 />
            <Menu_Toggle />
            <Contacto />
            <Mapa />
            <Piezas />
            <Footer />
          </Route>

          <Route path="/Tapiceria">
            <Sonido_Menu04 />
            <Menu_Toggle />
            <Contacto />
            <Mapa />
            <Tapiceria />
            <Footer />
          </Route>

          <Route path="/Motor">
            <Sonido_Menu05 />
            <Menu_Toggle />
            <Contacto />
            <Mapa />
            <Motor />
            <Footer />
          </Route>

          <Route path="/Millennio">
            <Sonido_Menu06 />
            <Menu_Toggle />
            <Contacto />
            <Mapa />
            <Millennio />
            <VideoJS />
            <Galeria />
            <Footer />
          </Route>

          <Route path="/Terzo01">
            <Icono_Cerrar_Millennio />
            <Terzo01 />
          </Route>

          <Route path="/Terzo02">
            <Icono_Cerrar_Millennio />
            <Terzo02 />
          </Route>

          <Route path="/Terzo03">
            <Icono_Cerrar_Millennio />
            <Terzo03 />
          </Route>

          <Route path="/Terzo04">
            <Icono_Cerrar_Millennio />
            <Terzo04 />
          </Route>

          <Route path="/Terzo05">
            <Icono_Cerrar_Millennio />
            <Terzo05 />
          </Route>

          <Route path="/Terzo06">
            <Icono_Cerrar_Millennio />
            <Terzo06 />
          </Route>


          <Route path="/Aventador">
            <Menu_Toggle />
            <Aventador />
            <Boton_Aventador />
            <Footer />
          </Route>

          <Route path="/Centenario">
            <Menu_Toggle />
            <Centenario />
            <Boton_Centenario />
            <Footer />
          </Route>

          <Route path="/Gallardo">
            <Menu_Toggle />
            <Gallardo />
            <Boton_Gallardo />
            <Footer />
          </Route>

          <Route path="/Huracan">
            <Menu_Toggle />
            <Huracan />
            <Boton_Huracan />
            <Footer />
          </Route>

          <Route path="/Murcielago">
            <Menu_Toggle />
            <Murcielago />
            <Boton_Murcielago />
            <Footer />
          </Route>

          <Route path="/Urus">
            <Menu_Toggle />
            <Urus />
            <Boton_Urus />
            <Footer />
          </Route>

          <Route path="/Veneno">
            <Menu_Toggle />
            <Veneno />
            <Boton_Veneno />
            <Footer />
          </Route>


          <Route path="/V12">
            <Sonido_Menu07 />
            <Menu_Toggle />
            <Mapa />
            <V12 />
            <Footer01 />
          </Route>

          <Route path="/V12_01">
            <Icono_Cerrar_V12 />
            <V12_01 />
            <V12_Miniatura_01 />
          </Route>

          <Route path="/V12_02">
            <Icono_Cerrar_V12 />
            <V12_02 />
            <V12_Miniatura_02 />
          </Route>

          <Route path="/V12_03">
            <Icono_Cerrar_V12 />
            <V12_03 />
            <V12_Miniatura_03 />
          </Route>


          <Route path="/Ferruccio">
            <Sonido_Menu08 />
            <Menu_Toggle />
            <Mapa />
            <Ferruccio />
            <Boton_Historia />
            <Footer />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>

  );
};

export default App;

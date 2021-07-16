import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Logo_menu from '../logo_lamborghini/Logo_menu.png';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  return (
    <div className="navbar">
      <div className="Logo_menu">
        <img src={Logo_menu} alt="Logo_menu" width="108" />
      </div>

      <Link to="/Inicio">INICIO</Link>
      <Link to="/Nosotros">NOSOTROS</Link>
      <Link to="/Piezas">PIEZAS</Link>
      <Link to="/Tapiceria">TAPICERÍA</Link>
      <Link to="/Motor">MOTOR</Link>
      <Link to="/Millennio">MILLENNIO</Link>

      <div className="boton_lamborghini">
        <link to=""></link><Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>LAMBORGHINI<ArrowDropDownIcon /></Button>
      </div>

      <Link to="/V12">V12</Link>
      <Link to="/Ubicacion">UBICACIÓN</Link>


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/aventador">Aventador</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Centenario">Centenario</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Gallardo">Gallardo</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Huracan">Huracán</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Murcielago">Murciélago</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Urus">Urus</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Veneno">Veneno</Link></MenuItem>
      </Menu>
    </div>

  );
}
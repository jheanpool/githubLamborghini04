import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Logo_menu from '../logo_lamborghini/Logo_menu.png';
import './Menu_Inicio.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  return (
    <div className="navbar_inicio">

        <div className="Logo_menu_inicio">
            <img src={Logo_menu} alt="Logo_menu" width="120" />
        </div>

        <Link to="/Sign_In">Sign In</Link>
        <Link to="/Sign_Up">Sign Up</Link>

        
    </div>

  );
}
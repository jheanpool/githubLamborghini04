import './App.css';
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Logo_menu from '../logo_lamborghini/Logo_menu.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Boton_Lamborghini.css';
import './Logo_menu01.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function App() {
  const [show, setShow] = useState(true)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className="App">

          <div className="Logo_menu">
            <img src={Logo_menu} alt="Logo_menu" width="120" />
          </div>

            <div className="toggle">

           


              <Button onClick={() => setShow(!show)} ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg></Button>

            </div>

            {
              show ?

                <div className="navbar">

                <div className="Logo_menu01">
                  <img src={Logo_menu} alt="Logo_menu" width="120" />
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

                  <Link to="/V12">NEW V12</Link>
                  <Link to="/Ferruccio">FERRUCCIO</Link>


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

                : null
            }


          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
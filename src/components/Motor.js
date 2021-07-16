import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import motor01 from '../video_gif/motor01.gif';
import './Motor.css';

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


export default function CenteredGrid() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className="imagen_motor">
           
            <img src={motor01} alt="motor01" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>


          <div className="informacion_motor">

            <p>V12 es un motor de gasolina diseñado por Lamborghini, siendo
            el mejor exponente de la nueva generacion Automibilli Lamborghini
            y fue el primer motor producido por la empresa. La producción comenzó
            en los inicios de 1963, con un gran motor V12 de 3,5 litros (3464 cc)
            usado en el Lamborghini 350 GT en todo el trayecto de la compañia ,
            que es el primer automóvil producido por el fabricante Ferricio Lamborghini.</p>

            <br></br>

          </div>
        </Grid>

      </Grid>
    </div>

  )
}

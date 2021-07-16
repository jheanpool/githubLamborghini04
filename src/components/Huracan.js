import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import huracan from '../tipos_de_lamborghini/huracan.jpg';
import './Tipos_Lamborghini.css';

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
          
          <div className="tipos_lamborghini">

            <img src={huracan} alt="huracan" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="titulo_tipos_lamborghini">

            <p>LAMBORGHINI HURACÁN</p>

          </div>

          <div className="informacion_tipos_lamborghini">

            <p>El Huracán mantiene motor atmosférico V10 de 5.2 L
            (heredado del Gallardo), con 610 CV (compartido con el Audi R8).
            Para garantizar el equilibrio y el rendimiento, el coche es de
            motor central, como se acostumbra desde hace tiempo en la firma,
            La velocidad máxima del Huracán es más de 345 km/h
            (207,95 mph). Puede acelerar de 0 a 100 km/h (62 mph)
            en 3,2 segundos y de 0 a 200 km/h (124 mph) en 9.3 segundos.
            Con un peso en seco de 1.422 kg (3.135 libras), el Huracán
            tiene una relación potencia-peso de 2,36 kg (5,2 libras)
              por caballo de fuerza.</p>

            <br></br>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}

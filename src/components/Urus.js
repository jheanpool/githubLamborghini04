import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import urus from '../tipos_de_lamborghini/urus.jpg';
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

            <img src={urus} alt="urus" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="titulo_tipos_lamborghini">

            <p>LAMBORGHINI URUS</p>

          </div>

          <div className="informacion_tipos_lamborghini">

            <p>El Lamborghini Urus será mucho más liviano que la mayoría
            de los SUV debido al uso extensivo de polímero reforzado con
            fibra de carbono, aunque se basa en la misma plataforma que el
            Audi Q7, Bentley Bentayga, Porsche Cayenne y Volkswagen Touareg.
            El Urus contará con un motor V8 biturbo de 650 caballos de fuerza,
            y habrá una versión híbrida enchufable. El Urus tendrá un diseño
            de motor delantero y tracción total.​ El Urus tendrá una velocidad
            máxima de 190 mph (305 km/h), lo que lo convertiría en el SUV de
            producción más rápido del mundo, superando los 187 mph (301 km/h)
             del Bentley Bentayga. Su capacidad será para cuatro personas.</p>

            <br></br>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import veneno from '../tipos_de_lamborghini/veneno.jpg';
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

            <img src={veneno} alt="veneno" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="titulo_tipos_lamborghini">

            <p>LAMBORGHINI VENENO</p>

          </div>

          <div className="informacion_tipos_lamborghini">

            <p>El Aventador monta un motor V12 naturalmente aspirado de 6498 cm³
            (6,5 L; 396,5 plg³), que eroga una potencia máxima de 700 CV (690 HP;
            515 kW) a las 8250 rpm y un par máximo de 690 N·m (509 lb·pie)
            a las 5500 rpm. Su velocidad máxima es de 350 km/h (217 mph)
            con una aceleración de 0 a 100 km/h (62 mph) en 2,9 segundos estimada
            por la fábrica,4​ siendo confirmada según una prueba realizada por la
            revista francesa Sport Auto, aunque con una aceleración de
            0 a 100 km/h (62 mph) en 2,8 segundos, tres décimas más lento que el
             Bugatti Veyron.</p>

            <br></br>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}

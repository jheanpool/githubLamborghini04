import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import gallardo from '../tipos_de_lamborghini/gallardo.jpg';
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

            <img src={gallardo} alt="gallardo" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="titulo_tipos_lamborghini">

            <p>LAMBORGHINI GALLARDO</p>

          </div>

          <div className="informacion_tipos_lamborghini">

            <p>El motor es un diez cilindros en V de 4961 cm³ (5 litros) con una
            potencia máxima de 500 CV (493 HP; 368 kW) a las 7800 rpm. Tiene
            tracción total y un diferencial de acoplamiento viscoso central,con
            un bastidor de aluminio del mismo estilo de los Audi A2 y Audi A8.
            El peso aproximado, tomando el depósito de combustible lleno y con
            un conductor de 80 kg (176 lb) promedio dentro,
             es de 1546 kg (3408 lb)</p>

            <br></br>

          </div>


        </Grid>
      </Grid>
    </div>

  )
}

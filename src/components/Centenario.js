import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import centenario from '../tipos_de_lamborghini/centenario.jpg';
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
            
            <img src={centenario} alt="centenario" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="titulo_tipos_lamborghini">

            <p>LAMBORGHINI CENTENARIO</p>

          </div>

          <div className="informacion_tipos_lamborghini">

            <p>Usa un motor V12 a 60° Lamborghini de 6498 cm³ (6,5 litros)
            fabricadocompletamente en aluminio,2​ que desarrolla una potencia
            máxima de 770 CV (759 HP; 566 kW) con un peso de 235 kg (518 libras),
            conocido internamente como "L539", mismo que también se encuentra
            en el Aventador, es decir, una versión recalibrada de este último modelo.
            Cuenta con un chasis de fibra de carbono y en la parte inferior de su
            carrocería también hay partes fabricadas en este material.
            El splitter frontal, los faldones, los pasos de rueda y el gran
            difusor posterior, responden a la necesidad de conseguir un mejor
             comportamiento aerodinámico.</p>

            <br></br>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}

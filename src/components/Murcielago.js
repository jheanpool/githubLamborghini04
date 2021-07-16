import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import murcielago from '../tipos_de_lamborghini/murcielago.jpg';
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

         <img src={murcielago} alt="murcielago" height="102%" width="102%"/>

         </div>

         </Grid>

         <Grid item xs={11} sm={11} md={11} lg={11}>
         
         <div className="titulo_tipos_lamborghini">

         <p>LAMBORGHINI MURCIÉLAGO</p>

         </div>

         <div className="informacion_tipos_lamborghini">

           <p>Tiene un motor V12 a 60º de 6192 cm³ (6,2 L; 377,9 plg³),
             que alcanza una potencia máxima de 580 CV (572 HP; 427 kW)
             a las 7500 rpm y un par máximo de 650 N·m (479 lb·pie) a las
             5400 rpm. Gracias a esto, es capaz de llegar a los 333 km/h
             (207 mph) de velocidad máxima y acelerar de 0 a 100 km/h (62 mph)
             en 3,8 segundos. Como lo viene haciendo la marca desde hace
             30 años, el motor está situado en posición central-trasera
             longitudinal con la transmisión ubicada al frente, la cual le
             otorga al vehículo una buena distribución de pesos: 58 % atrás
             y 42 % delante, confiriéndole mejor tracción, agarre y frenada.</p>
             
             <br></br>

         </div>

         </Grid>
      </Grid>
    </div>
    
    )
  }  

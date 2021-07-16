import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import piezas01 from '../video_gif/piezas01.gif';
import ruedas from '../img_partes/ruedas.jpg';
import velocimetro from '../img_partes/velocimetro.jpg';
import cambios from '../img_partes/cambios.jpg';
import './Piezas.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
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

          <div>
            <div className="imagen_piezas">
              <img src={piezas01} alt="piezas01" height="102%" width="102%" />
            </div>
          </div>
        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>
          <div className="informacion_piezas">

            <p>compuesto de caucho especial, preparado para hacer frente a todas
            las condiciones climáticas. La banda de rodadura del neumático está
            diseñada para garantizar el máximo agarre en rectas y curvas, al
            tiempo que reduce el efecto aquaplaning en carreteras mojadas,
           la distancia de frenado y el consumo de combustible.</p>
          </div>

        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img src={ruedas} alt="ruedas" height="52%" width="102%" />

          <div>
            <div className="titulo_ruedas">
              <p>RUEDAS</p>
            </div>
          </div>

          <div className="informacion_ruedas">
            <p>compuesto de caucho especial, preparado para hacer frente a todas
            las condiciones climáticas. La banda de rodadura del neumático está
            diseñada para garantizar el máximo agarre en rectas y curvas, al
            tiempo que reduce el efecto aquaplaning en carreteras mojadas,
           la distancia de frenado y el consumo de combustible.</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img src={velocimetro} alt="velocimetro" height="52%" width="102%" />

          <div>
            <div className="titulo_velocimetro">
              <p>VELOCIMETRO</p>
            </div>
          </div>

          <div className="informacion_velocimetro">
            <p>Su velocidad máxima estandar es de más de 325 km/h. La aceleración
            de 0 a 100 km/h, y es producida en 3,2 segundos la cual alcanza a los 200 km/h
            en 9,9 segundos. Posee tecnología funcional de Stop & Start, la cifra de consumo combinado
            se ha reducido a 12,5 litros por cada 100 km.</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img src={cambios} alt="cambios" height="52%" width="102%" />

          <div>
            <div className="titulo_cambios">
              <p>CAJA DE CAMBIOS</p>
            </div>
          </div>
          <div className="informacion_cambios">
            <p>Se encuentran disponible solo para modelos con motor super longitudinal, de tracción trasera
            y tracción total, esta caja de cambios tiene tres embragues multidisco mas dos frenos.
            Además carga un nuevo sistema de bombeo hidráulico que contribuye a toda la eficiencias
           de los deportivos Lamborghini.</p>
          </div>
          <br></br>

        </Grid>

      </Grid>
    </div>
  );
}

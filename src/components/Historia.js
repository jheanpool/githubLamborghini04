import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import miura from '../img_fondo/miura.jpg';

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
          <div>
            <div className="imagen_1963">
              <br></br>
              <br></br>
              <img src={miura} alt="miura" height="100%" width="100%" />
            </div>
          </div>

          <Grid item xs={11} sm={11} md={11} lg={11}>

            <div className="informacion_1963">

              <br></br>

              <p>Producido entre 1966 y 1972, el Miura fue un biplaza de motor
              central que tuvo tres variantes: P400, S y SV. En el P400, el
              motor 3.9 V12 de 350 CV, mientras que el S era un restyling que
              además entregaba 20 CV más, y el SV alcanzaba una potencia de 385 CV.
              En el Salón de Bruselas de 1968 se presentó un prototipo Roadster,
              que nunca llegó a materializarse en un modelo de producción.
              El Miura fue la primera gran creación de un joven diseñador
              de Bertone, Marcello Gandini, que pasaría a la historia de
              la automoción por el diseño de éste y otros muchos Lamborghini,
              Maserati, Alfa Romeo... Del Miura se fabricaron 764 unidades;
              una de ellas –un P400 S- fue propiedad del cantante Frank Sinatra.
             </p>

            </div>
          </Grid>


        </Grid>
      </Grid>
    </div>

  )
}

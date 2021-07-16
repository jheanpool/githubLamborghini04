import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ferruccio from '../img_fondo/ferruccio.jpg';
import './Ferruccio.css';

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
            <div className="imagen_ferruccio">
              <img src={ferruccio} alt="ferruccio" height="100%" width="100%" />
            </div>
          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="informacion_1963">

            <p>La historia de Lamborghini Automobili comienza en 1963 gracias a Ferruccio
            Lamborghini, nacido en 1916 bajo el signo de Tauro, un hombre hábil, impetuoso,
            de fuerte carácter y, sobre todo, el verdadero protagonista del nacimiento de la
            empresa y de las fases iniciales de su extraordinaria historia. A principios
            de la posguerra de la Segunda Guerra Mundial, Ferruccio ya había fundado una
            fábrica de tractores, la cual puso en marcha con energía y determinación, creando
            un verdadero punto de referencia en el sector.

            A principios de los años sesenta, Lamborghini era un hombre de éxito, fuerte y con
            las ideas claras, pero cuando dijo que fabricaría un superdeportivo con el que hacer
            la competencia a Ferrari, muchos pensaron que estaba loco. Fabricar un coche de ese
            tipo estaba visto como una extravaganciainexplicable, un peligroso salto a ciegas,
            algo que le supondría gastar dinero sin obtener beneficio alguno.

            Comenzó a trabajar en el proyecto a finales de 1962 y ya en mayo de 1963 fundó la sociedad
            «Automobili Ferruccio Lamborghini», adquiriendo un terreno de grandes dimensiones en
            Sant'Agata Bolognese, a unos 25 kilómetros de Bolonia, para construir una fábrica
            grande y ultramoderna.
              </p>

            <br></br>

          </div>
        </Grid>
      </Grid>
    </div>

  )
}




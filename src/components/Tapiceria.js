import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import tapiceria01 from '../video_gif/tapiceria01.gif';
import './Tapiceria.css';

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

          <div className="imagen_tapiceria">
            
            <img src={tapiceria01} alt="tapiceria01" height="102%" width="102%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="informacion_tapiceria">

            <p>fibra de carbono, algo de espuma y una espectacular tela teñida en
            color rojo que es muy interesante tanto a nivel estético como a
            nivel funcional. Su tacto es muy agradable, es ligero y agarra al
            cuerpo de una manera ideal. Además, no aporta nada de calor (importante
            en un habitáculo cerrado y con un gigantesco motor soplando a tu espalda)
            y su durabilidad está más que probada.</p>

            <br></br>
            <h1>titulo</h1>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}

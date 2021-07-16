import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import millennio01 from '../video_gif/millennio01.gif';
import './App.css';
import './Millennio.css';

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


          <div className="imagen_millennio">
          
            <img src={millennio01} alt="millennio01" height="102%" width="102%" />

            <br></br>
            <br></br>
          </div>

        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={11} sm={11} md={11} lg={11}>

            <div className="informacion_millennio">

              <p>Lamborghini fija las exigencias del Terzo Millennio en materia de ahorro
              energético y materiales innovadores, para marcar su rumbo dentro del
              segmento de los superdeportivos eléctricos y garantiza una experiencia
              de conducción absoluta, el cual da una idea de cómo será el futuro de
              Lamborghini totalmente eléctrico donde aprecia simplemente impresionante
           las nuevas tendencias que vendrían por parte de Lamborghini.</p>

              <br></br>
              <br></br>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>

  )
}


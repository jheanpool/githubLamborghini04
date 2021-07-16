import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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

    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      backgroundColor: 'rgba(20,21,27,0)',

    },
  }),
);

export default function ColorTextFields() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className="informacion_ubicacion">

            <p>La tienda de automobili Lamborghini tiene su sede social en
            S.Sant Agata Bolognese, BO 40019, Via Modena 12 en el
                 norte de Italia.</p>

          </div>
        </Grid>
      </Grid>
    </div>

  )
}


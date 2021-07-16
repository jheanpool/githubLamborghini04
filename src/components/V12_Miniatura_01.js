import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import v12_01 from '../v12_galeria/v12_01.jpg';
import v12_02 from '../v12_galeria/v12_02.jpg';
import v12_03 from '../v12_galeria/v12_03.jpg';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import './App.css';
import './V12_Miniatura_01.css';

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
       <Grid item xs={4} sm={4} md={4} lg={4}>

       <div className="v12_miniatura">

        <div className="v12_miniatura_01">

            <img src={v12_01} alt="v12_01" height="102%" width="20%"/>

        </div>


        <div className="v12_miniatura_02">

            <img src={v12_02} alt="v12_02" height="102%" width="25.3%"/>

        </div>
        

        <div className="v12_miniatura_03">

            <img src={v12_03} alt="v12_03" height="102%" width="33.8%"/>

        </div>

       </div>
        </Grid>
      </Grid>
    </div>
    
    )
  }  

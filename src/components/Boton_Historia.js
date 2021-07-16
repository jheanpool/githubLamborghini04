import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Historia from './Historia';
import './Historia_Boton.css';

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

          <Router>
            <div>
              <ul>
                <div className="boton_historia">

                  <Link to="/Historia">PRIMER SUPER <br></br>DEPORTIVO</Link>

                </div>
              </ul>
            </div>

            <Switch>
              <Route path="/Historia">
                <br></br>
                <Historia />
              </Route>
            </Switch>

          </Router>

        </Grid>
      </Grid>
    </div>

  )
}

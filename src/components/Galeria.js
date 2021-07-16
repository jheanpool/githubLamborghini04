import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import terzo01 from '../terzo_galeria/terzo01.jpg';
import terzo02 from '../terzo_galeria/terzo02.jpg';
import terzo03 from '../terzo_galeria/terzo03.jpg';
import terzo04 from '../terzo_galeria/terzo04.jpg';
import terzo05 from '../terzo_galeria/terzo05.jpg';
import terzo06 from '../terzo_galeria/terzo06.jpg';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";



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

          <div className="imagenes_galeria01">
            <Link to="/Terzo01"><img src={terzo01} alt="terzo01" width="33.3%" /></Link>
          </div>

          <div className="imagenes_galeria01">
            <Link to="/Terzo02"><img src={terzo02} alt="terzo02" width="33.3%" /></Link>
          </div>

          <div className="imagenes_galeria01">
            <Link to="/Terzo03"><img src={terzo03} alt="terzo03" width="33.3%" /></Link>
          </div>

          <div className="imagenes_galeria01">
            <Link to="/Terzo04"><img src={terzo04} alt="terzo04" width="33.3%" /></Link>
          </div>

          <div className="imagenes_galeria01">
            <Link to="/Terzo05"><img src={terzo05} alt="terzo05" width="33.3%" /></Link>
          </div>

          <div className="imagenes_galeria01">
            <Link to="/Terzo06"><img src={terzo06} alt="terzo06" width="33.3%" /></Link>
          </div>

        </Grid>
      </Grid>
    </div>

  )
}

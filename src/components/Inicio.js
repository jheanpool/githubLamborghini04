import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoPlayer from "react-video-js-player";
import video_inicio from "../video/video_inicio.mp4";
import './Inicio_VideoJS.css';
import './Inicio_VideoJS_01.css';
import './App.css';

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
  const videoSrc = video_inicio ;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>


        <div className="video_inicio">
          <VideoPlayer src={videoSrc} autoplay
           playbackRates={[0,5 , 1, 3.85, 16]}/> 
          <br></br> 
          
        </div>
 

        </Grid>
      </Grid>
    </div>

  )
}


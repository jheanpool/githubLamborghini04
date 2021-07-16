import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import v12_01 from '../v12_galeria/v12_01.jpg';
import v12_02 from '../v12_galeria/v12_02.jpg';
import v12_03 from '../v12_galeria/v12_03.jpg';
import v12 from '../img_fondo/v12.jpg';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router,Switch,Route,Link,useParams,useRouteMatch} from "react-router-dom";
import './App.css';
import './New_V12.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    
    
  },
  body: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: 'rgba(20,21,27,0)',
    color: 'rgba(255,255,255,5)',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, .0)'
     
  },

  expanded: {
    
  },

  AccordionSummary: {

    fontSize:'Large',
    
  },
}));

  
export default function CenteredGrid() {

const classes = useStyles();

return (

<div className={classes.root}>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={12} md={12} lg={12}>

         <div className="imagen_v12">
       
            <img src={v12} alt="v12" height="102%" width="102%"/>

         </div>
         
      <Accordion className={classes.body}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Más Información </Typography>
        </AccordionSummary>


        <AccordionDetails>
          
  <div>

      <div className="titulo_v12">

        <p>V12 VISIÓN GRAN TURISMO</p>

      </div>

      <div className="informacion_v12">
         
        <p>A nivel mecánico, el V12, comparte el propulsor
           híbrido del Lamborghini Sián. Recordemos que se trata de un V12
           atmosférico de 819 CV que otorga una aceleración de 0 a 100 km/h en
           2,8 segundos y tiene una velocidad máxima superior a los 350 km/h. 
           Asociado al V12 atmosférico, un motor eléctrico integrado a la caja
           de cambios (llamado e-motor) proporciona 34 CV más. Y asociado al
           e-motor nos encontramos con un supercondensador tres veces más
           potente que una celda del mismo peso y tres veces más ligero que
           una batería de iones de litio con la misma potencia.</p>

      </div>

      <div className="imagenes_v12">

      <Link to="/V12_01"><img src={v12_01} alt="v12_01" height="33%" width="33%"/></Link>
      <Link to="/V12_02"><img src={v12_02} alt="v12_01" height="33%" width="33%"/></Link>
      <Link to="/V12_03"><img src={v12_03} alt="v12_01" height="33%" width="33%"/></Link>
      
      </div>
    
  </div>
          
           </AccordionDetails>
         </Accordion>
         
        </Grid> 
      </Grid> 
</div>
    

       )  
   }
   
 
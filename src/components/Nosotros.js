import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import nosotros01 from '../video_gif/nosotros01.gif';
import './Nosotros.css';

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

         <div className="nosotros">
              <div className="imagen_nosotros">
                <br></br>
                <br></br>
                 <img src={nosotros01} alt="nosotros01" height="102%" width="102%"/>
              </div>
            </div>

            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11}>

            <div>
              <div className="titulo_nosotros">
                <p>NOSOTROS</p>
              </div>
            </div>

         <div className="informacion_nosotros">
         
         <p>Automobili Lamborghini S. p. A. es una empresa italiana que fabrica
            autos deportivos lujosos,confortables y caros a la altura de la marca 
            Automobilli Lamborghini, así como los tan reconocidos tractores
            Lamborghini Trattori. Se encuentra en la comuna de Sant’Agata Bolognese,
            cerca de Bolonia. La empresa fue fundada en 1963 por Ferruccio Lamborghini.
            Hoy le contaremos cuál es la reina de los automóviles italianos.</p>
            
            <p>Automobili Lamborghini cree firmemente en el futuro de los superdeportivos
            y trabaja para preservar estos valores y llevarlos hasta un tercer milenio
            que requiere nuevos prototipos, soluciones innovadoras y la adopción de
            trenes de potencia electrificados. Lamborghini Terzo Millennio muestra la
            visión de Automobili Lamborghini a través de un prototipo que tiene como
            objetivo ofrecer la experiencia de conducción más emocional y completa
            con un diseño y una arquitectura extremos y un innovador tren de potencia
            eléctrico. El Terzo Millennio se desarrolla alrededor de 4 pilares: energía,
            innovación en materiales, arquitectura de vehículo y tren de potencia, sonido
            y emoción. Los dos primeros pilares se conciben en colaboración con dos
            laboratorios del MIT - Instituto de Tecnología de Massachusetts: el
            «Dinca Research Lab», liderado por el Prof. Mircea Dinca, del Departamento
            de Química, y el «Mechanosynthesis Group», liderado por el Prof. Anastasios
            John Hart, del Departamento de Ingeniería Mecánica.</p>

            <br></br>
     
           </div>
         </Grid>
      </Grid>
    </div>
    
    )
  }  




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="boton_llamar">
        <Button>
          <div className="llama">
            <a href="tel:+34678567876">¡LLama Ahora!</a>
          </div>
        </Button>
      </div>
    </div>
  );
}

import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme =>({
      backdrop: {
      zIndex: 1400,
      color: '#ffff'
    }
  }));

export const Loader = (props)=> {
  const classes = useStyles();
  return (
      <Backdrop className={classes.backdrop} open={props.showLoader}>
        <CircularProgress  color="inherit"/>
      </Backdrop>
  );
}


/* eslint-disable */

import React from 'react';
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import luxuryImg from '../../assets/RomaLux_logo_1.png'

const Luxury = () => {
  const classes = useStyles();
  return(
  <div className={classes.background}>
    <div className={classes.launch} style={{display: 'flex', justifyContent: 'center'}}>
        <img src={luxuryImg} style={{height: 230}}></img>
    </div>
    <div className={classes.launchWord}>
    Launching Soon...
    </div>
  </div>
  );
};

export default Luxury;


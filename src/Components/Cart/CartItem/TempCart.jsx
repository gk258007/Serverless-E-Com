/* eslint-disable */

import React from "react";
import {
  Badge,
} from "@material-ui/core";
import useStyles from "./styles";



const TempCart = ({ item }) => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.theCard}>
      <div className={classes.cardContent1} style={{margin: '1%', alignItems: 'center',}}>
      <div style={{ height: 20, textAlign: 'left'}}>
        </div>
        {/* <h6>{item.quantity}</h6> */}
        {/* <img className={classes.imgage} src={item.image.url}></img> */}
        {item.name} 
        : {item.quantity}
        
        {/* <h6>{item.name}</h6> */}
        
        {/* <h6>{item.line_total.formatted_with_symbol}</h6> */}
      </div>
      </div>
      </>
  );
};

export default TempCart;

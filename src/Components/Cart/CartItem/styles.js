/* eslint-disable */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 250,
    minWidth: 150,
    backgroundColor: '#efe6de'
  },
  cardContent: {
    display: "grid",
    textAlign: 'center',
    alignItems: 'center',
    
  },
  imgage:{
    height: 50,
  },
  theCard:{
    width: '100%',
    backgroundColor: "#efe6de",
  },
  cardContent1:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: "#F1F1F1",
    
  },
  CardActions: {
    display: 'flex',
    justifyContent: "space-evenly",
    backgroundColor: '#efe6de',
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    
    
  },
  remove:{
    backgroundColor: '#424242',
    color: '#b8b8b8',
  }
}));

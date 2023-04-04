/* eslint-disable */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    
    minHeight: 280,
    minWidth: 220,
    maxHeight: 'fit-content',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    textDecoration: 'none',
    
  },
  words:{
    textDecoration: 'none',
    padding: "1%",
  },
  media: {
    paddingTop: "56.25%", // 16:9
    marginTop: "5%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    // padding: '5%',
    
  },

  cardcont:{

  },
  cardContent: {
    // display: 'flex',
    // justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

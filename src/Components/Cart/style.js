/* eslint-disable */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: 100,
    marginBottom: 50,
    textAlign: 'center',
  },
  emptyButton: {
    backgroundColor: '#424242',
    color: '#b8b8b8',
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
    
  },

  subcart:{
    textAlign: 'center',
    justifyContent: 'center',
    padding: 20
  },

  gridcart:{
    justifyContent: 'center',
  },
  checkoutButton: {
    minWidth: "150px",
    backgroundColor: '#F8ECDF',
  },
  cardDetails: {
    // width: '50%',
    display: "grid",
    marginTop: "10%",
    marginBottom: "10%",
    // width: "100%",
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  cartPage:{
    minHeight: 350,
    textAlign: 'center',
    
  },
  cart:{
    
  },
}));

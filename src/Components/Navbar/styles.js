/* eslint-disable */



import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {  
    justifyContent: 'center',
    height: 100,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 0,
    left: 0,
    backgroundColor: '#ffe1cf',
  },

  centerHead:{
    zIndex: 12,
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Brush Script MT',
  },

  fake:{
    position: 'absolute',
    height: 90,
    width: '100%',
    // backgroundColor: 'grey',
    // opacity: 0.1,

  },

  hamb:{
    position: 'absolute',
    top: 35,
    right: 60,
    
  },

  cartBoard:{
    position: 'fixed',
    top: '15%',
    right: '2%',
    display: 'flex',
    flexFlox: 'bottom',
    zIndex: 2,
  },

  toolBar:{
    width:'100%',
    zIndex: 2,
  },
  logo:{
    height: 90,
    marginTop: 5,
    
  },
  // parbut:{
  //   display: 'flex',
  //   flexDirection: 'right'
  // },
  nav1:{
    width: '75%',
    display: 'flex',
    textDecoration: "none",
    color: 'c4c4c4',
    fontWeight: 'bold',
    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  luxury:{
    position: 'absolute',
    textAlign: 'center',
    top: '1%',
    left: '42.5%',
    color: '#d8b56a',
  },
  but:{
    padding: 10,
    color:'#d8b56a',
    textDecoration: "none",
  },
  butdrop:{
    padding: 10,
    paddingTop:10,
    // marginTop:'30%',
    color:'#a1a1a1',
    textDecoration: "none",
  },
  button:{
    alignItems: 'right',
    marginRight: '5%',
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    fontFamily: 'Gothic A1',
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
    // alignItems: 'right',
  },
  
}));

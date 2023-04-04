import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  page:{
    display: 'flex',
        // flexWrap: 'wrap',
        marginTop: 100,
        padding:0,
        maxWidth: 930,
        minWidth: 390,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
  },

  desc:{
    textAlign: 'center',
  },

  add:{
      backgroundColor: 'grey',
      color: 'white',
      padding: '2%',
      width: 150,
      fontSize: 20,
  },
  price:{
    padding: 20,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',

  },
  
  details:{
    alignItems: 'center',
    paddingLeft: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2%',
  },
  details1:{
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  productpage:{
        minHeight: 400,
        minWidth: 390,
        maxHeight: 800,
        maxWidth: 850,
      },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 900,
  },
  line: {  
    width: '100%',
    height: 0,
    left: 187,
    top: 638,
    border: '1px solid rgba(0, 0, 0, 0.5)',
  },

  card:{
    borderRaduis: 15,
  },

  cartbutton:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cover:{
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    height: 300
  },

  content: {
    position: 'relative',
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  root: {
    flexGrow: 1,
    
  },
}));

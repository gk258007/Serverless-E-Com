/* eslint-disable */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  page:{
    display: 'flex',
        marginTop: 150,
        padding:0,
        maxWidth: 1200,
        minWidth: 390,
        marginLeft: 'auto',
        marginRight: 'auto',

  },
productsname:{
  padding: 20,
  color: '#3f3f3f',
},
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  productsname:{
    // marginTop: 50,
    textAlign: "center",
    marginBottom: 50,
  },

  productCover:{
    // 
    // borderRadius: 5,
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  },
  root: {
    flexGrow: 1,
    
  },

  // soap cat

  theLink:{
    textDecoration: 'none',
    padding: 10,
    margin: 10,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e6ceb9"
},

 toi:{
    // position: 'absolute',
    textAlign: "left",
    width: 300,
    color: 'grey',
    // textShadow: '0 0 8px rgb(0 0 0 / 80%)',
 },
 h1:{
    textAlign: 'center',
    backgroundColor: "#dab699", padding: 20
 },

cover: {
    width: '100%',
    marginTop: 0,
    marginBottom: 0,
},
cat:{
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
},
catText: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 25,
    textShadow: '0 0 4px rgb(0 0 0 / 80%)',
    
    
},
catimg: {
    minWidth: 150,
    minHeight: 100,
    maxWidth: 300,
    maxHeight: 200,
    margin: 5,
    borderRadius: 5,
},


}));

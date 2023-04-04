/* eslint-disable */
import { makeStyles, fade } from "@material-ui/core/styles";
import { Autorenew } from "@material-ui/icons";
import { withTheme } from "styled-components";

export default makeStyles((theme) => ({
    
    galimg:{marginLeft: 'auto', marginRight: 'auto',},
    
    wrapper:{
        
        padding:'0% 1% 2% 1%',
        borderRadius: 10,
        
    },
    
    imageslide:{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    },

    toppage:{
        
        marginTop: 100,
        marginBottom: 50,
        // backgroundColor: "black",
        display: 'grid',
        justifyContent: 'center',
    },
    
    line:{
        height: 30,
        display: 'block',
        
    },
    item:{
        minWidth: 300,
        
    },

    theLink:{
        textDecoration: 'none',
        color: 'white',
        padding: 10,
        // backgroundColor: 'white',

        
    },
    headText: {
        color: 'black',
        
     },
     toi:{
        // position: 'absolute',
        
        
        textAlign: 'center',
        
        color: 'grey',
        
     },
     h3:{
        textAlign: 'center',
     },

    cover: {
        width: '100%',
        height:'auto',
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

    catcont:{
        alignItems: 'center'
    },

    catText: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 25,
        textShadow: '0 0 4px rgb(0 0 0 / 80%)',
        
        
        
    },
    catimg: {
        width: 350,
        height: 'auto',
        margin: 5,
        borderRadius: 50,
        // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

        
    },
}));
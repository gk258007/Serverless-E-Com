/* eslint-disable */

import React from 'react';
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import oilskinphoto from "../../../../assets/Lemongrass.jpg"
import dryskinphoto from "../../../../assets/Banana.jpg"
import allskinphoto from "../../../../assets/Papaya.jpg"
import useStyles from '../../style'
import { CircularProgress } from "@material-ui/core";

const Soaps = ({ categories, onAddToCart }) => {
    const classes = useStyles();
    if(!categories.length) return (
        <div className={classes.spinner} style={{minHeight: 900}}>
        <CircularProgress />
      </div>
    );
    
    return(
      !categories.length? 
        <>
          Glitch!! we're working on it!!
        </>
        :
        <>
        {categories.map((category)=>{   
        if(category.name==="Soaps") 
        return (
         !category.productsData.length ?
         <div className={classes.content} style={{textAlign: 'center', alignItems: 'center', marginTop: '30%', width: '100%', fontSize: 35, textShadow: '0 0 4px rgb(0 0 0 / 40%)',}}>
          {category.name} are currently not available, we'll bring them soon..
         </div>
         :
         
         <>
          {console.log("i can go here")}
          <div className={classes.page}>
          <main className={classes.content}>
          <div className={classes.productsname}><h1>{category.name}</h1></div>

          <div className={classes.cat}>
            <Link className={classes.theLink} to={"/All"}>
            
              <img className={classes.catimg} src={allskinphoto} alt = "Freedom Blog" />
              <div class={classes.toi}>
                  <h3> For All skins </h3>
              </div>
            
            </Link>
            <Link className={classes.theLink} to={"/Dry"}>
              <img className={classes.catimg} src={dryskinphoto} alt = "Freedom Blog" />
              <div className={classes.toi}>
                  <h3> For Dry skin </h3>
              </div>
                  
            </Link>
            <Link className={classes.theLink} to={"/Oily"}>
            
              <img className={classes.catimg} src={oilskinphoto} alt = "Freedom Blog" />
              <div class={classes.toi}>
                <h3> For Oily skin </h3>
              </div>
            
            </Link>
    </div>

    <div className={classes.productsname}><h1 style={{backgroundColor: "#dab699", padding: 20, marginTop: "8%"}}>All Soaps</h1></div>
    
              <Grid container justify="center" spacing={4} style={{marginTop: 50}}>
              {category.productsData.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
            </main>
          </div>
          </>
        );
    })}
    </>
    );
  };

  export default Soaps;
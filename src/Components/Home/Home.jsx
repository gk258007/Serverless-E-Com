/* eslint-disable */

import {React, useState} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import useStyles from "./styles";
import maincover from "../../assets/Coffee.jpg"
// import maincover from "../../assets/Cover_red.jpg"
import { Link } from 'react-router-dom';
import oilskinphoto from "../../assets/Lemongrass.jpg"
import dryskinphoto from "../../assets/Banana.jpg"
import allskinphoto from "../../assets/Papaya.jpg"



const Home = () => {
  const classes = useStyles();

  return(
    <>
    
    {/* <div className={classes.imageslide} style={{marginTop: 80}}></div> */}
    
    <div className={classes.toppage}> 
      <img className={classes.cover} src={maincover}></img>
      <div className={classes.catcont} style={{textDecoration: 'none', color: 'grey', textAlign: 'center' }}><h1 style={{margin: '2%'}}><span style={{padding: '5%', borderRadius: 10}}>Soaps</span></h1>
        <div className={classes.cat}>
        <Link className={classes.theLink} to={"/All"}>
        <div className={classes.headText}>
        <img className={classes.catimg} src={allskinphoto} alt = "Freedom Blog" />
        <div class={classes.toi}>
          <h3 className={classes.theLink1}> For All skins </h3>
        </div>
      </div>
    </Link>
    <Link className={classes.theLink} to={"/Dry"}>
    <div className={classes.headText}>
      <img className={classes.catimg} src={dryskinphoto} alt = "Freedom Blog" />
      <div className={classes.toi}>
          <h3> For Dry skin </h3>
      </div>
    </div>
    </Link>
    <Link className={classes.theLink} to={"/Oily"}>
    <div className={classes.headText}>
      <img className={classes.catimg} src={oilskinphoto} alt = "Freedom Blog" />
      <div class={classes.toi}>
         <h3> For Oily skin </h3>
        
      </div>
    </div>
    </Link>
    </div>
    </div>
    
    {/* Shampoo */}
    {/* <div className={classes.line}>
              </div>
    <div style={{textDecoration: 'none', color: 'black', textAlign: 'center' }}><h2>&ensp;&ensp;<span style={{padding: '1%', borderRadius: 10}}>Shampoo</span></h2>              
          </div>
          <div className={classes.line}>
            </div>
            <div className={classes.cat}>
    <Link className={classes.theLink} to={"/Shampoo"}>
    <div className={classes.headText}>
      <img className={classes.catimg} src={allskinphoto} alt = "Freedom Blog" />
      <div class={classes.toi}>
          <h3 className={classes.theLink1}> For All Hair types </h3>
      </div>
    </div>
    </Link>
    <Link className={classes.theLink} to={"/Dry"}>
    <div className={classes.headText}>
      <img className={classes.catimg} src={dryskinphoto} alt = "Freedom Blog" />
      <div className={classes.toi}>
          <h3> For Dry skin </h3>
      </div>
    </div>
    </Link>
    <Link className={classes.theLink} to={"/Oily"}>
    <div className={classes.headText}>
      <img className={classes.catimg} src={oilskinphoto} alt = "Freedom Blog" />
      <div class={classes.toi}>
         <h3> For Oily skin </h3>
      </div>
    </div>
    </Link>
    </div> */}
  </div>
  
  </>
  );
};

export default Home;


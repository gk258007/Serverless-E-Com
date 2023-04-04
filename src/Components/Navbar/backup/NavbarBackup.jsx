/* eslint-disable */

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import TempCart from "../Cart/CartItem/TempCart";
import logo from "../../assets/Roma_Logo.png";
// import logoLux from "../../assets/RomaLux_logo_1.png"
import useStyles from "./styles";
import './style.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const openNav = () => {
    document.getElementById("mySidepanel").style.width="150px";
    document.getElementById("openbtn2").style.display="flex";
  };
  const closeNav = () => {
    document.getElementById("mySidepanel").style.width="0px";
    document.getElementById("openbtn2").style.display="none";
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="transparent" elevation={5} >
        <Toolbar className={classes.toolBar} >
            <Link to='/'>
              <img
              className={classes.logo} src={logo} alt="Roma's handcrafted"/>
            </Link>
            <div className={classes.nav1}>
              <div className={classes.parbut}>
              <div class="dropdown">
              <Link to="/products" className={classes.butdrop}>Our Collections</Link>
              <div class="dropdown-content">
                <a><Link to="/Soaps">Our Soaps
                  <div class="dropdown-content1">
                    <a><Link to="/All">For all skin types</Link></a>
                    <a><Link to="/Dry">For Dry skin</Link></a>
                    <a><Link to="/Oily">For Oily skin</Link></a>
                  </div></Link>
                  </a>
                </div>
                <div class="dropdown-content11">
                  <a><Link to="/Shampoo">Our Shampoos
                  <div class="dropdown-content1">
                    
                  </div></Link>
                  </a>
              </div>
              
              </div>
              <div class="dropdown-content111">
                  <a><Link to="/creams">Our Creams
                  <div class="dropdown-content1">
                    
                  </div></Link>
                  </a>
              </div>
              <div class="dropdown-content1111">
                  <a><Link to="/oils">Our Oils
                  <div class="dropdown-content1">

                  </div></Link>
                  </a>
              </div>
              <div class="dropdown-content11111">
                  <a><Link to="/bathsalts">Our Bath Salts
                  <div class="dropdown-content1">
                    
                  </div></Link>
                  </a>
              </div>
              <div class="dropdown-content111111">
                  <a><Link to="/lipbalms">Our Lip Balms
                  <div class="dropdown-content1">
                    
                  </div></Link>
                  </a>
              </div>
              <div class="dropdown-content1111111">
                  <a><Link to="/painbalms">Our Pain Balms
                  <div class="dropdown-content1">
                    
                  </div></Link>
                  </a>
              </div>
              <div class="dropdown-content11111111">
                  <a><Link to="/bodymist">Our Body Mists
                  <div class="dropdown-content1">
                    
                  </div></Link>
                  </a>
              </div>
            <Link to="/luxury" className={classes.but}>Roma's Luxury</Link>
            </div>
            {/* <div className={classes.luxury}>
              <img src={logoLux} style={{height: 100, margin: 0}}></img>
              Roma's Luxury
            </div> */}
            </div>
          <div className={classes.grow}/>
          <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          {/* {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) || location.pathname === "/products" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) || location.pathname === "/Dry" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )|| location.pathname === "/All" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )|| location.pathname === "/Oily" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )|| location.pathname === "/item" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cartItems.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )
          } */}
        </Toolbar>
        <div className={classes.fake} style={{opacity: 0.5}}>

        </div>
      </AppBar>
      
      {!cartItems.total_items ? 

    <></>
      : 
      <div className={classes.cartBoard}>      
          <div className={classes.cartTitle}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
          <button class="openbtn" onClick={()=>openNav()}>Your Cart</button>
          <button id="openbtn2" class="openbtn1" onClick={()=>closeNav()} style={{color: "grey"}}>x</button>
          </div>
          <div id="mySidepanel" class="sidepanel">
          <div container justify="center" spacing={4}>
                {cartItems.line_items.map((item) => (
                  <TempCart
                    item={item}
                  />
                  )
                )
              }
            
          </div>
              
            </div>
          </div>
        </div>}
  </>
  
  );
};

export default Navbar;
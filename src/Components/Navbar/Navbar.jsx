/* eslint-disable */

import {React, useEffect, useState, useRef} from "react";
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
import styled, { createGlobalStyle } from "styled-components";




const Navbar = ({ cartItems }) => {

  const classes = useStyles();
  const location = useLocation();
  // const openNav = () => {
  //   document.getElementById("mySidepanel").style.width="150px";
  //   document.getElementById("openbtn2").style.display="flex";
  // };
  // const closeNav = () => {
  //   document.getElementById("mySidepanel").style.width="0px";
  //   document.getElementById("openbtn2").style.display="none";
  // };

  // 
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  //

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <>
    
      <AppBar position="fixed" className={classes.appBar} color="transparent" elevation={0} >
        <Toolbar className={classes.toolBar} >
        {/* <div className={classes.centerHead}>Roma's Handcrafted</div> */}
        <Link to='/'>
              <img
              className={classes.logo} src={logo} alt="Roma's handcrafted"/>
            </Link>
            <div className={classes.nav1}>

              <Styles.Wrapper>
                <CSSReset />
                <Navbara.Wrapper>
                    <Navbara.Items ref={drawerRef} openDrawer={openDrawer}>
                    <Navbara.Item><Link to="/products">Roma's Collections</Link></Navbara.Item>
                    <Navbara.Item><Link to="/Soaps">Soaps</Link></Navbara.Item>
                    <Navbara.Item><Link to="/Dry">Dry Skin</Link></Navbara.Item>
                    <Navbara.Item><Link to="/All">All Skin</Link></Navbara.Item>
                    <Navbara.Item><Link to="/Oily">Oily Skin</Link></Navbara.Item>
                    
                    {/* <Navbara.Item><Link to="/Soaps">Lip Balms</Link></Navbara.Item>
                    <Navbara.Item><Link to="/Soaps">Pain Balms</Link></Navbara.Item>
                    <Navbara.Item><Link to="/Soaps">Body Mist</Link></Navbara.Item>
                    <Navbara.Item><Link to="/Soaps">Bath Salts</Link></Navbara.Item> */}
                  </Navbara.Items>
                </Navbara.Wrapper>
              </Styles.Wrapper>
              
              <div className={classes.hamb}>
                <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
                  <HamburgerButton.Lines />
                </HamburgerButton.Wrapper>
              </div>

            </div>
          
            
          <div className={classes.grow}/>
                
          <div className={classes.buttonc}>
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
        </Toolbar>
        
      </AppBar>
      
      {/* {!cartItems.total_items ? 

    <></>
      : 
      <div className={classes.cartBoard}>      
          <div className={classes.cartTitle}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div class="openbtn" onClick={()=>openNav()}>Your Cart</div>
              <div id="openbtn2" class="openbtn1" onClick={()=>closeNav()} style={{color: "grey"}}>x</div>
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
        </div>
        } */}
  </>
  
  );
};

const Styles = {
  Wrapper: styled.main`
    
  `
};

const Navbara = {
  Wrapper: styled.nav`
  
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    

    // 40em == 640px
    @media only screen and (max-width: 950px) {
      position: fixed;
      width: 100vw;
      bottom: 0;
    }
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 950px) {
      position: fixed;
      left: 0;
      top: 100px;
      width: 200px;

      height: 100%;

      flex-direction: column;

      background-color: #efe6de;
      opacity: 0.95;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(-150%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;

    @media only screen and (max-width: 950px) {
      padding: 1rem 0;
    }
  `
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 2rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 950px) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    
  }
`;


export default Navbar;
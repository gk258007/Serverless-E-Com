/* eslint-disable */

import React from "react";
import { Container, Button, Grid, CircularProgress } from "@material-ui/core";
// import { CallMissedSharp } from "@material-ui/icons";
import useStyles from "./style";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <div 
    className={classes.cartPage} 
    style={{
      // minHeight: 900
      }}>
        <p>
      You Have No Items in Your Shopping Cart,
      </p>
      
      
      <Link to="/products" 
      style={
        {textDecoration: "none", 
        color: 'black', 
        backgroundColor: '#e0ac69', 
        padding: 10, 
        position: 'absolute', 
        marginTop: 30}
        }>
         <b>Start  adding  some . . . </b>
      </Link>
      
    </div>
  );

  const FilledCart = () => (
    <>
    <div className={classes.cart}>
      <Grid className={classes.gridcart} container spacing={3}>
        {cartItems.line_items.map((item) => (
          <Grid key={item.id} style={{margin: 10}}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <div className={classes.subcart}>
          <h3>Subtotal: &ensp;&ensp;{cartItems.subtotal.formatted_with_symbol}</h3>
        </div>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>
      </div>
    </>
  );
  if (!cartItems.line_items) return (
  <>
    <div style={{minHeight: 700, width: '100%', display: 'grid'}}>
      <div style={{position: 'absolute', top: '50%',  left: '40%'}}>
        <CircularProgress />
      </div>
    </div>
  </>
  );
  return (
    <Container style={{minHeight: 700}}>
      <div className={classes.toolbar} />
      <div className={classes.title} variant="h5" gutterBottom>
        <h2>Your Shopping Cart</h2>
      </div>
      {!cartItems.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

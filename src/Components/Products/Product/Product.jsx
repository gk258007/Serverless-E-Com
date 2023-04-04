/* eslint-disable */

import React from "react";
import { Card, CardMedia, CardContent, CardActions, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import colorDef from "../../../assets/color.json"


const Product = ({ product, onAddToCart }) => { 
  const classes = useStyles();
  //const color = colorDef.color[product.name].fg
 
  console.log(colorDef.color["Avocado"].fg)
  //style={{backgroundColor: colorDef.color[product.name].fg}
  return (
    <div className={classes.mainroot} >
    
    <Card className={classes.root} >
      <Link to={
       {
         pathname: `/${product.id}`,
         value:product.id
        }} style={{textDecoration: 'none', color: 'black'}}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}   
      />   
      <div className={classes.cardcont} ></div>
      <CardContent >
        <div className={classes.cardContent} >
          <div className={classes.words} variant="subtitle1" gutterBottom>
            <h2>{product.name}</h2>
          </div>
          <div className={classes.words} variant="subtitle1"  >
              <h3>{product.price.formatted_with_symbol}</h3>
          </div>
        </div>
      </CardContent>
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>
        <h4>Buy Now  </h4>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};

export default Product;

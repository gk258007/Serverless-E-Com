/* eslint-disable */

import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./style";
import "../../strindex.css"

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.page} style={{minHeight: 1080}}>
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <div className={classes.productsname}><h1>All Products</h1></div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </div>
    
    
  );
};

export default Products;

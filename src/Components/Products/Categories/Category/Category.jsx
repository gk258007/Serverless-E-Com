/* eslint-disable */

import React from 'react';
import { Grid } from "@material-ui/core";
import Product from '../../Product/Product';
import useStyles from '../../style'
import { CircularProgress } from "@material-ui/core";

const Category = ({ categories, onAddToCart }) => {
  const classes = useStyles();
  let urlElements = window.location.href.split('/')
  if(!categories.length) return (
      <div className={classes.spinner} style={{minHeight: 900}}>
      <CircularProgress />
    </div>
  );
  return(!categories.length? 
    <>
      Glitch!! we're working on it!!
    </>
    :
    <>
    {categories.map((category)=>{   
      
    if(category.name===urlElements[3]) 
    return (
     !category.productsData.length ?
     <div className={classes.content} style={{textAlign: 'center', alignItems: 'center', marginTop: '30%', width: '100%', fontSize: 35,}}>
      {category.name} are currently not available, we'll bring them soon..
     </div>
     :
     <>
      <div className={classes.page}>
      <main className={classes.content}>
      <div className={classes.productsname}><h1>{category.name}</h1></div>
          <Grid container justify="center" spacing={4}>
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

export default Category;
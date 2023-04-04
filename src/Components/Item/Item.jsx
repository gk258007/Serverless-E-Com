/* eslint-disable */

import React from 'react';
import useStyles from './styles'
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import colorDef from "../../assets/color.json"


const Item = ({ products, onAddToCart }) => {
    const classes = useStyles();
    let urlElements = window.location.href.split('/')
    return(
        <div style={{minHeight: 900,}}>
        {products.map((product)=>{ 
        if(product.id===urlElements[3])
        return (
            <>
        
          <div className={classes.page} style={{backgroundColor: colorDef.color[product.name].bg, color: colorDef.color[product.name].font}}>
            <main className={classes.content}>
                <div className={classes.card} style={{backgroundColor: colorDef.color[product.name].fg, borderRadius: 15}}>
                    <h2 style={{padding: 20, textAlign: 'center'}}>{product.name}</h2>
                        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', }}>
                            <img className={classes.cover} 
                            src={product.image.url} />
                            <div className={classes.desc}
                                dangerouslySetInnerHTML={{ __html: product.description }}
                                variant="body4"
                                color="textSecondary"/>
                            <div className={classes.price} >
                                <h3>Price:</h3>
                                <h3>{product.price.formatted_with_symbol}</h3>
                            </div>
                            <div className={classes.cartbutton}>Add to Cart 
                                <IconButton style={{color: colorDef.color[product.name].font}}
                                    aria-label="Add to cart"
                                    onClick={() => onAddToCart(product.id, 1)}>
                                    <AddShoppingCart />
                                </IconButton>
                            </div>
                        </div>
                </div>
            <div className={classes.detail1} style={{width: '75%', marginLeft: 'auto', marginRight: 'auto', padding: '5%'}}>
                <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <h3>Ingredients: </h3>
                    <div className={classes.desc2} 
                        dangerouslySetInnerHTML={{ __html: product.extra_fields[0].name }}
                        variant="body4"
                        color="textSecondary"
                    />
                    <div className={classes.desc2}
                        dangerouslySetInnerHTML={{ __html: product.extra_fields[1].name }}
                        variant="body4"
                        color="textSecondary"
                        style={{marginBottom: '5%'}}
                    />
                    <h3>Best Before</h3>
                    <p>
                        All products from Roma's handcrafted are best before 36 months from Date of Manufacture.
                    </p>
                </div>
            </div>
            </main>
          </div>
          </>
        );
    })}
    </div>
    );
  };

export default Item;

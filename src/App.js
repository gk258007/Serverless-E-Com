/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart, Checkout } from "./Components";
import  Product from "./Components/Products/Product/Product";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Commerce from '@chec/commerce.js';
//import { commerce } from "./lib/Commerce";
import Category from "./Components/Products/Categories/Category/Category"
import AllSkin from "./Components/Products/Categories/Category/AllSkin"
import DrySkin from "./Components/Products/Categories/Category/DrySkin"
import OilySkin from "./Components/Products/Categories/Category/OilySkin"
import Soaps from "./Components/Products/Categories/Category/Soaps"
import Item from "./Components/Item/Item"
import { NotFound } from "./Notfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/Documentations/PrivacyPolicy";
import Luxury from "./Components/Luxury/Luxury";


const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const commerce = new Commerce('pk_39246d2cfa63e07af7009e8399a47b810db2fac66c6ad');

  const fetchProducts = async () => {
    const { data:products } = await commerce.products.list();
    const { data:categoriesData }  = await commerce.categories.list();
    const productsPerCategory = categoriesData.reduce((acc, category) => {
      return[
        ...acc,
        {
          ...category,
          productsData: products.filter((product) => 
          product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    },[]);
    setCategories(productsPerCategory);
    setProducts(products);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
     fetchProducts();
    fetchCart();
  }, []);


  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <Navbar cartItems={cart} handleDrawerToggle={handleDrawerToggle} fetchCart handleUpdateCartQty={handleUpdateCartQty}/>
        <Switch>
          <Route exact path="/">
          {/* <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} /> */}
            <Home />
          </Route>
          <Route exact path="/luxury">
            <Luxury />
          </Route>
          <Route exact path="/products" >
            <Products products={products} cartItems={cart} onAddToCart={handleAddToCart} handleUpdateCartQty={handleUpdateCartQty} />
          </Route>
          <Route exact path="/cart">
          {/* pulling details to product */}
            <Cart
              cartItems={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cartItems={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          {/* Categories */}
          <Route exact path="/Category">
            <Category categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Shampoo">
             <Category categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Creams">
            <Category categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Soaps">
            <Category categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Oily">
            <OilySkin categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Oils">
            <Category categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/All">
            <AllSkin categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Dry">
            <DrySkin categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty ={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/:id"> 
            <Item products={products} onAddToCart={handleAddToCart}  handleUpdateCartQty={handleUpdateCartQty}/>
          </Route>
          <Route exact path="/Privacy">
            <PrivacyPolicy />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </Router>
  );
};

export default App;

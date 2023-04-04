/* eslint-disable */

import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./Checkout/customTextField";
import { commerce, Commerce } from "../../lib/Commerce";
import { Link } from "react-router-dom";
import useStyles from "../CheckoutForm/Checkout/styles";
import "../CheckoutForm/style.css";

const AddressForm = ({ checkoutToken, next }) => {
  const classes = useStyles();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
    price: sO.price,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    //setShippingOptions(options);
    setShippingOption(options[0]);
   
  };
  useEffect(() => {
    
    fetchShippingCountries(checkoutToken.id);
  }, []);
  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);
  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const setShippingPrice = (priceData) => {
    checkoutToken.live.shipping.price = priceData.price;
  };



//

  return (
    <div>
      <div variant="h6" gutterBottom>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) =>
              next({
                ...data,
                shippingCountry,
                shippingSubdivision,
                shippingOption,
              })
            )}
          >
            
            <Grid container spacing={3} >
              <FormInput required name="firstName" label="First Name" />
              <FormInput required name="lastName" label="Last Name" />
              <FormInput required name="address" label="Address" />
              <FormInput required name="email" label="Email" />
              <FormInput required name="mobile" label="Mobile" />
              <FormInput required name="city" label="City" />
              <FormInput required name="pincode" label="Pincode" />
              <Grid item xs={12} sm={6}>
                <InputLabel>Select Country</InputLabel>
                <Select
                  value={shippingCountry}
                  fullWidth
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Select State</InputLabel>
                <Select
                  value={shippingSubdivision}
                  fullWidth
                  onChange={(e) => setShippingSubdivision(e.target.value)}
                >
                  {subdivisions.map((state) => (
                    <MenuItem key={state.id} value={state.id}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => setShippingOption(e.target.value)}
                  required
                >
                  {options.map((option) => (
                    <MenuItem
                      onClick={(e) => setShippingPrice(option)}
                      key={option.id}
                      value={option.id}
                    >
                      {option.label}                      
                    </MenuItem>
                  ))}
                </Select>
              </Grid> */}
            </Grid>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button component={Link} to="/cart" variant="outlined" style={{backgroundColor: '#424242',
    color: '#b8b8b8',}}>
                Back to Cart
              </Button>
              <Button type="submit" variant="contained" color="#dadada" style={{backgroundColor: '#F8ECDF',}}>
                Proceed
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddressForm;

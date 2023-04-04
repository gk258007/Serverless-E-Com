/* eslint-disable */

import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { commerce } from "../../../lib/Commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cartItems, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cartItems.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cartItems.id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push("/");
        }
      };

      generateToken();
    }
  }, [cartItems]);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div style={{}}>
          <div variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </div>
          <Divider className={classes.divider} />
          <div variant="subtitle2">
            Order ref: {order.customer_reference}
          </div>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/"style={{backgroundColor: '#424242',
    color: '#b8b8b8',}}>
          Back to home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <div style={{minHeight: 900}}>
        <div variant="h5">Error: {error}</div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </div>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        setShippingData={setShippingData}
        next={next}
      />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        cartItems={cartItems}
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <div style={{minHeight: 900}} >
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout} >
        <Paper className={classes.paper} style={{backgroundColor: '#e6ceb9', fontFamily: 'century gothic'}}>
          <div variant="h4" align="center">
            Checkout
          </div>
          <Stepper activeStep={activeStep} className={classes.stepper} style={{backgroundColor: '#e6ceb9', }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;

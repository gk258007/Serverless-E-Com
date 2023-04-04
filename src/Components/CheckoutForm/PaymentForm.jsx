/* eslint-disable */

import React from 'react';
import {  Button, Divider } from '@material-ui/core';
import Review from './Review';
import { fontSize } from '@mui/system';
//import xtype from 'xtypejs'

var today = new Date(),
time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();

const PaymentForm = ({
  checkoutToken,
  backStep,
  onCaptureCheckout,
  nextStep,
  shippingData,
  cartItems,
}) => {
  let rid = '';
  // checkoutToken.line_items.map((item) => (item.quantity))
  
  const finalAmount = parseFloat(
    checkoutToken.live.shipping.price.raw + checkoutToken.live.subtotal.raw,
  ).toFixed(2);

  const shipAuth = `Bearer ${process.env.REACT_APP_SHIP_TOKEN_KEY}`;
  console.log(shipAuth);
  function shipPush() {
    fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
        {
            method: 'POST',
            body:  JSON.stringify({
              "order_id": checkoutToken.id,
              "order_date": time,
              "pickup_location": "HOME",
              "channel_id": "",
              "comment": "",
              "billing_customer_name": shippingData.firstName,
              "billing_last_name": shippingData.lastName,
              "billing_address": shippingData.address,
              "billing_address_2": "",
              "billing_city": shippingData.city,
              "billing_pincode": shippingData.pincode,
              "billing_state": shippingData.shippingSubdivision,
              "billing_country": shippingData.shippingCountry,
              "billing_email": shippingData.email,
              "billing_phone": shippingData.mobile,
              "shipping_is_billing": true,
              "shipping_customer_name": "",
              "shipping_last_name": "",
              "shipping_address": "",
              "shipping_address_2": "",
              "shipping_city": "",
              "shipping_pincode": "",
              "shipping_country": "",
              "shipping_state": "",
              "shipping_email": "",
              "shipping_phone": "",
              "order_items":
              checkoutToken.line_items.map((item) => (
                     {
                       "name":item.name,
                       "sku":item.sku,
                       "units":item.quantity,
                       "selling_price":item.price.raw,
                       "discount": "",
                       "tax": "3",
                       "hsn": 4412,
                     }
                  )),
              "payment_method": "Prepaid",
              "shipping_charges": 0,
              "giftwrap_charges": 0,
              "transaction_charges": 0,
              "total_discount": 0,
              "sub_total": checkoutToken.live.subtotal.raw,
              "length": 8,
              "breadth": 2.5 * cartItems.total_items,
              "height": 7,
              "weight": 0.1 * cartItems.total_items
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': shipAuth
            }
        }
    )
}

  const launchRazorpay = async () => {

    const options = {
      key: process.env.REACT_APP_RP_TEST_KEY, 
      amount: finalAmount * 100,
      currency: 'INR',
      name: "Roma's Hancrafted",
      description: 'Soaps made with Love',

      handler(response) {
        rid = response.razorpay_payment_id;
        const orderData = {
          line_items: checkoutToken.live.line_items,
          customer: {
            firstname: shippingData.firstName,
            lastname: shippingData.lastName,
            email: shippingData.email, 
            phone: shippingData.mobile
          },
          shipping: {
            name: 'India',
            street: shippingData.address,
            town_city: shippingData.city,
            county_state: shippingData.shippingSubdivision,
            postal_zip_code: shippingData.zip,
            country: shippingData.shippingCountry,
          },
          fulfillment: { shipping_method: shippingData.shippingOption },
          payment: {
            gateway: 'razorpay',
            razorpay: {
              payment_id: response.razorpay_payment_id,
            },
          },
        };
        onCaptureCheckout(checkoutToken.id, orderData);
        nextStep();
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
    shipPush();
    // shiprocket
  };

  return (
    <div className='df'>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <div variant="h6" gutterBottom style={{ margin: '20px 0' }}>
        Payment Method
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        {/* <div> Shipping price: {checkoutToken.live.shipping.price.raw} </div> */}
        {/* available_options[0]. */}
        <Button
          onClick={launchRazorpay}
          variant="contained"
          type="submit"
          color="primary"
        >
          Pay ₹{finalAmount}
        </Button>
        <h2 style={{fontSize:8}}>as we are not passing Public live keys it is expected to throw "id not valid error"</h2>
      </div>
    </div>
  );
};

export default PaymentForm;

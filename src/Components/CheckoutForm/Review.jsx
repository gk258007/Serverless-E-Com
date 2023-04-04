/* eslint-disable */

import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  

  const finalAmount = parseFloat(
    checkoutToken.live.shipping.price.raw + checkoutToken.live.subtotal.raw
  ).toFixed(2);

  

  return (
    <div>
      <div variant="h6" gutterBottom>
        Order Summary
      </div>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <div variant="body2">
              {product.line_total.formatted_with_symbol}
            </div>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Shipping Cost" />
          <div variant="subtitle1">
            {checkoutToken.live.shipping.price.formatted_with_symbol}
          </div>
        </ListItem>
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <div variant="subtitle1" style={{ fontWeight: 700 }}>
            ₹{finalAmount}
          </div>
        </ListItem>
      </List>
    </div>
  );
};

export default Review;

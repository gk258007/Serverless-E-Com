/* eslint-disable */

import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card style={{minWidth: 300}}>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <h3>{item.name}</h3>
        <h3>
        {item.line_total.formatted_with_symbol}
        </h3>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button
            type="submit"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            Remove
          </Button>
          <div>{item.quantity}</div>
          <Button
            type="submit"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            Add
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          className={classes.remove}
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

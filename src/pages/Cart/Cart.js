import React from "react";
import { CartEmpty } from "./CartEmpty";
import { CartCard } from "./CartCard";
import { useCartContext } from "../../context/CartContext";
import UseTitle from "../../hooks/UseTitle";
const Cart = () => {
  UseTitle("Cart");
  const { CartList } = useCartContext();
  return <div>{CartList.length > 0 ? <CartCard /> : <CartEmpty />}</div>;
};

export default Cart;

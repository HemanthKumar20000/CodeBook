import React, { createContext, useContext, useReducer } from "react";
import { CartReducers } from "../reducer/CartReducers";

const initialState = {
  CartList: [],
  total: 0,
  
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducers, initialState);

  const addToCart = (item) => {
    const updatedList = state.CartList.concat(item);
    const tot = updatedList.reduce((sum, item) => sum + item.price, 0);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        CartList: updatedList,
        tot: tot,
      },
    });
  };
  const removeFromCart = (item) => {
    const updatedList = state.CartList.filter((i) => i.id !== item.id);
    const tot = updatedList.reduce((sum, item) => sum + item.price, 0);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        CartList: updatedList,
        tot: tot,
      },
    });
  };
  const clearCart = () => {
  dispatch({
    type: "CLEAR_CART",
  });
};
  const value = {
    CartList: state.CartList,
    total: state.total,
    addToCart,
    removeFromCart,clearCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCartContext = () => useContext(CartContext);

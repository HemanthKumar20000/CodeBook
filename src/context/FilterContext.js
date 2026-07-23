import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";

export const initialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  rating: null,
  sortBy: null,
};

export const FilterContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  const initialProduct = (product) => {
    dispatch({
      type: "ALL_PRODUCT",
      payload: {
        productList: product,
      },
    });
  };
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }
  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }
  function ratings(products) {
    if (state.rating === "4STARSABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3STARSABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2STARSABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1STARSABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }
  const finalProduct = sort(ratings(inStock(bestSeller(state.productList))));
  const value = {
    productList: finalProduct,
    onlyInStock: state.onlyInStock,
    bestSellerOnly: state.bestSellerOnly,
    rating: state.rating,
    sortBy: state.sortBy,
    initialProduct,
    dispatch,
    state,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  return context;
};

export const FilterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL_PRODUCT":
      return { ...state, productList: payload.productList };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, rating: payload.rating };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "ONLY_IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock };
    case "CLEAR_FILTER":
      return {
        ...state,

        onlyInStock: payload.onlyInStock,
        bestSellerOnly: payload.bestSellerOnly,
        rating: payload.rating,
        sortBy: payload.sortBy,
      };
    default:
      return state;
  }
};

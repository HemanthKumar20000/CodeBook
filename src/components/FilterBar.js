import React from "react";
import { useFilterContext } from "../context/FilterContext";

export const FilterBar = ({ setShow }) => {
  const { state, dispatch } = useFilterContext();

  return (
    <section className="filter">
      <div
        className="fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 left-0 top-0"
        tabIndex="-1"
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Filters
        </h5>

        <button
          onClick={() => setShow(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5"
        >
          ✕
        </button>

        <div className="border-b pb-3"></div>

        <div className="py-4 overflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
            {/* Sort */}
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1">Sort by</p>

              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "lowtohigh" },
                    })
                  }
                  checked={state.sortBy === "lowtohigh"}
                  id="price-sort-1"
                  type="radio"
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - Low to High
                </label>
              </div>

              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "hightolow" },
                    })
                  }
                  checked={state.sortBy === "hightolow"}
                  id="price-sort-2"
                  type="radio"
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - High to Low
                </label>
              </div>
            </li>

            {/* Ratings */}
            <li className="mt-1 mb-5">
              <span className="font-semibold">Rating</span>

              {[
                "4STARSABOVE",
                "3STARSABOVE",
                "2STARSABOVE",
                "1STARSABOVE",
              ].map((item, index) => (
                <div className="flex items-center my-1" key={item}>
                  <input
                    onChange={() =>
                      dispatch({
                        type: "RATINGS",
                        payload: { rating: item },
                      })
                    }
                    checked={state.rating === item}
                    id={`rating-sort-${index + 1}`}
                    type="radio"
                    name="rating-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`rating-sort-${index + 1}`}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {4 - index} Stars & Above
                  </label>
                </div>
              ))}
            </li>

            {/* Other Filters */}
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1">Other Filters</p>

              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "BEST_SELLER_ONLY",
                      payload: {
                        bestSellerOnly: !state.bestSellerOnly,
                      },
                    })
                  }
                  checked={state.bestSellerOnly}
                  id="best-seller"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
                />

                <label htmlFor="best-seller" className="ml-2">
                  Best Seller Only
                </label>
              </div>

              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "ONLY_IN_STOCK",
                      payload: {
                        onlyInStock: !state.onlyInStock,
                      },
                    })
                  }
                  checked={state.onlyInStock}
                  id="inStock"
                  type="checkbox"
                  className="w-4 h-4"
                />

                <label htmlFor="inStock" className="ml-2">
                  In Stock Only
                </label>
              </div>
            </li>

            {/* Clear Button */}
            <li className="mt-1 mb-5">
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "CLEAR_FILTER",
                    payload: {
                      onlyInStock: false,
                      bestSellerOnly: false,
                      rating: null,
                      sortBy: null,
                    },
                  })
                }
                className="text-gray-900 bg-white border border-gray-300 rounded-lg text-sm px-10 py-2.5 hover:bg-gray-100"
              >
                Clear Filters
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
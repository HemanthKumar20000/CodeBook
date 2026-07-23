import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const token = sessionStorage.getItem("token");

  const { CartList, addToCart, removeFromCart } = useCartContext();

  // Check whether the current product is already in the cart
  const isInCart = CartList.some((product) => product.id === item.id);

  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded shadow-xs dark:bg-slate-800 dark:text-white">
      <img className="rounded-base" src={item.poster} alt={item.name} />

      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {item.name}
      </h5>

      <p className="mb-6 text-body">{item.overview}</p>

      <h1 className="font-bold flex items-center gap-1">
        Rated: {item.rating}
        <i className="bi bi-star-fill text-yellow-500"></i>
      </h1>

      <br />

      <h1 className="font-bold flex items-center gap-1">
        Price: ${item.price}
        <i className="bi bi-currency-dollar"></i>
      </h1>

      <br />

      {/* Product Details Button */}
      <Link to={`/product/${item.id}`}>
        <button className="inline-flex items-center w-fit px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Product Details
        </button>
      </Link>

      <br />
      <br />

      {/* Add / Remove Cart Button */}

      {item.in_stock ? (
        token ? (
          isInCart ? (
            <button
              onClick={() => removeFromCart(item)}
              className="inline-flex items-center w-fit px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(item)}
              className="inline-flex items-center w-fit px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add To Cart
            </button>
          )
        ) : (
          <Link
            to="/login"
            className="inline-flex items-center w-fit px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add To Cart
          </Link>
        )
      ) : (
        <button
          disabled
          className="inline-flex items-center w-fit px-2 py-1 bg-red-500 text-white rounded-lg cursor-not-allowed opacity-70"
        >
          Out Of Stock
        </button>
      )}
    </div>
  );
};

export default ProductCard;

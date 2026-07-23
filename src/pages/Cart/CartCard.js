import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import CheckOut from "../CheckOut";
import UseTitle from "../../hooks/UseTitle";

export const CartCard = () => {
  UseTitle("CartCard")
  const { CartList, removeFromCart, total } = useCartContext();
  const [checkOut,setCheckOut]=useState(false);
  return (
    <>
      {CartList.map((product) => (
        <div
          key={product.id}
          className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5"
        >
          <div className="flex">
            <Link to={`/product/${product.id}`}>
              <img
                className="w-32 rounded"
                src={product.poster}
                alt={product.name}
              />
            </Link>

            <div>
              <Link to={`/product/${product.id}`}>
                <p className="text-lg ml-2 dark:text-slate-200">
                  {product.name}
                </p>
              </Link>

              <button
                onClick={() => removeFromCart(product)}
                className="text-base ml-2 text-red-400"
              >
                Remove
              </button>
            </div>
          </div>

          <div className="text-lg m-2 dark:text-slate-200">
            <span>${product.price}</span>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            
          </p>
          <span className="font-semibold text-xl">${total}</span>
        </div>
      <div className="text-right my-5">
          <button onClick={() => setCheckOut(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      {
        checkOut&&<CheckOut/>
      }
    </>
  );
};

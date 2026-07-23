import React from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../hooks/UseTitle";
const DashCard = ({ order }) => {
  UseTitle("DashBoard")
  return (
    <div className="max-w-5xl mx-auto mb-6 border rounded-lg shadow bg-white dark:bg-slate-800 dark:border-slate-700">
      {/* Order Header */}
      <div className="flex justify-between items-center px-5 py-3 border-b dark:border-slate-700">
        <div>
          <p className="font-semibold text-lg dark:text-white">
            Order #{order.id}
          </p>
          <p className="text-sm text-gray-500">{order.email}</p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-green-600 text-lg">
            ${order.tot}
          </p>
          <p className="text-sm text-gray-500">
            {order.Cartlist.length} Item(s)
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="p-5">
        {order.Cartlist.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border-b last:border-none py-4"
          >
            <div className="flex gap-4 items-center">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.poster}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>

              <div>
                <Link
                  to={`/product/${product.id}`}
                  className="font-semibold text-lg hover:text-blue-600 dark:text-white"
                >
                  {product.name}
                </Link>

                <p className="text-sm text-gray-500 mt-1">
                  Rating: ⭐ {product.rating}
                </p>
              </div>
            </div>

            <div className="font-semibold text-lg dark:text-white">
              ${product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashCard;
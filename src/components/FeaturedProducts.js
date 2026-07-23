import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/featured_products";
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const d = await response.json();
        setData(d);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className="my-20  dark:bg-slate-900 dark:text-white">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

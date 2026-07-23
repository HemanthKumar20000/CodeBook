import React, { useEffect, useState, useSyncExternalStore } from "react";
import { FilterBar, ProductCard } from "../../components";
import { useLocation, useSearchParams } from "react-router-dom";
import { useFilterContext } from "../../context/FilterContext";
import UseTitle from "../../hooks/UseTitle";
import { toast } from "react-toastify";
const ProductList = () => {
  UseTitle("Products")
  const { productList, initialProduct } = useFilterContext();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");
  const [show, setShow] = useState(false);
  const url = `${process.env.REACT_APP_HOST}products?name_like=${search ? search : ""}`;
  useEffect(() => {
    async function fetchData() {
      try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Login failed");
      }
      const d = await response.json();
      initialProduct(d);
    }catch(error){
      toast.error(error.status)
    }}
    fetchData();
  }, [url]);
  return (
    <div>
      <div className="flex justify-between">
        <h1>All Books({productList.length})</h1>
        <button
          onClick={() => setShow(!show)}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
          type="button"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
        {show && <FilterBar setShow={setShow} />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

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
            {/* Your existing JSX remains unchanged */}
          </ul>
        </div>
      </div>
    </section>
  );
};
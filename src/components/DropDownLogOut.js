import React from "react";
import { Link } from "react-router-dom";
const DropDownLogOut = ({ dropdown, setDropdown }) => {
  
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    
  };
  const em = sessionStorage.getItem("email");
  return (
    <div className="absolute right-0 top-full -mt-8 z-50 w-44 bg-white border rounded shadow-lg dark:text-white dark:bg-slate-900">
      <ul
        class="p-2 text-sm text-body font-medium"
        aria-labelledby="dropdownDefaultButton"
        onClick={() => setDropdown(false)}
      >
        <li>{em}</li>
        <li>
          <Link
            to="/productlist"
            class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
          >
            Ebooks
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={logout}
            class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
          >
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownLogOut;

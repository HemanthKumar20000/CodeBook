import React from "react";
import { Link } from "react-router-dom";
const DropDownLogIn = ({ dropdown, setDropdown }) => {
  return (
    <div className="absolute top-full right-0 -mt-8 z-50 w-44 bg-white border rounded shadow-lg  dark:text-white dark:bg-slate-900">
      <ul
        class="p-2 text-sm text-body font-medium"
        aria-labelledby="dropdownDefaultButton"
        onClick={() => setDropdown(false)}
      >
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
            to="/login"
            class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
          >
            Log In
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownLogIn;

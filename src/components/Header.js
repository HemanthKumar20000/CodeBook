import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import DropDownLogOut from "./DropDownLogOut";
import DropDownLogIn from "./DropDownLogIn";
import { useCartContext } from "../context/CartContext";
const Header = () => {
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false,
  );
  const [dropdown, setDropdown] = useState(false);
  const token = sessionStorage.getItem("token");
  const { CartList } = useCartContext();
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="">
      <nav className="fixed top-0 w-full h-20 z-20 bg-neutral-primary dark:bg-slate-900 dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="CodeBook Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              CODEBOOK
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg  toggle-dark-state-example "
            >
              {darkMode ? (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="sun"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="moon"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            <button
              onClick={() => setShow(!show)}
              className=" bi-search"
            ></button>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className=" bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {CartList.length}
                </span>
              </span>
            </Link>
            <button onClick={() => setDropdown(!dropdown)}>
              <span className="bi bi-person-circle"></span>
            </button>
            {dropdown &&
              (token ? (
                <DropDownLogOut dropdown={dropdown} setDropdown={setDropdown} />
              ) : (
                <DropDownLogIn dropdown={dropdown} setDropdown={setDropdown} />
              ))}
          </div>
        </div>
        {show && <SearchBar />}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-white py-10">
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-neutral-primary-soft md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-body sm:text-center">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

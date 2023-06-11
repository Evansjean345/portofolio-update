import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <NavLink className="w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center" aria-label="Home" role="img">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_Grey_background-svg1.svg"
            alt="logo"
            className="w-16 h-16"
          />
        </div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <img
              className="h-8 w-8"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg"
              alt="show"
            />
          </button>
          <div
            id="menu"
            className={`md:block lg:block ${show ? "" : "hidden"}`}
          >
            <button
              onClick={() => setShow(!show)}
              className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3"
            >
              <img
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                alt="hide"
              />
            </button>
            <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
              <li className=" font-bold text-indigo-600 hover:text-indigo-900 lg:hover:text-3xl  text-2xl transition-all  cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link to="/">Home</Link>
              </li>
              <li className=" font-bold  text-indigo-600 hover:text-indigo-900 text-2xl  transition-all lg:hover:text-3xl   cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link to="/projets">Projets</Link>
              </li>
              <li className=" font-bold  text-indigo-600 hover:text-indigo-900 text-2xl  transition-all lg:hover:text-3xl   cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link to="/about">about</Link>
              </li>
              <li className=" font-bold text-indigo-600 hover:text-indigo-900   text-2xl transition-all lg:hover:text-3xl cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link to="/contact" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

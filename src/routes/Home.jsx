import HomeHero from "../layout/HomeHero";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef } from "react";
import Cv from "../layout/Cv";
import SectionHome from "../layout/SectionHome";
import Contact from "../layout/Contact";

export default function Home() {
  const [show, setShow] = useState(false);
  const home = useRef(null);
  const projets = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-[100vh] w-full bg-black ">
      <NavLink className="pt-2 w-full fixed z-50 ">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center rounded-full"  aria-label="Home" role="img">
            <img src="/me.jpg" alt="logo" className="w-24 h-24  object-cover object-bottom rounded-full" />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className="sm:block bg-slate-200 md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <img
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg"
                alt="show"
              />
            </button>
            <div
              id="menu"
              className={`md:block  lg:block ${show ? "" : "hidden"}`}
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
              <ul
                className={`flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-black md:bg-transparent  z-20`}
              >
                <li
                  onClick={() => {
                    scrollToSection(home);
                    setShow(!show);
                  }}
                  className=" font-bold active:text-slate-300 active:transition-all  sm:text-slate-200 hover:text-slate-400 lg:hover:text-3xl  text-2xl transition-all  cursor-pointer md:ml-10 pt-10 md:pt-0"
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => {
                    scrollToSection(projets);
                    setShow(!show);
                  }}
                  className=" active:text-slate-300 active:transition-all font-bold   sm:text-slate-200 hover:text-slate-400 text-2xl  transition-all lg:hover:text-3xl   cursor-pointer md:ml-10 pt-10 md:pt-0"
                >
                  <Link to="#">Projets</Link>
                </li>
                <li
                  onClick={() => {
                    scrollToSection(about);
                    setShow(!show);
                  }}
                  className=" font-bold active:text-slate-300 active:transition-all   sm:text-slate-200 hover:text-slate-400 text-2xl  transition-all lg:hover:text-3xl   cursor-pointer md:ml-10 pt-10 md:pt-0"
                >
                  <Link to="#">about</Link>
                </li>
                <li
                  onClick={() => {
                    scrollToSection(contact);
                    setShow(!show);
                  }}
                  className=" font-bold active:text-slate-300 active:transition-all  sm:text-slate-200 hover:text-slate-400   text-2xl transition-all lg:hover:text-3xl cursor-pointer md:ml-10 pt-10 md:pt-0"
                >
                  <Link to="#" className="">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NavLink>
      <div className="bg-black">
        <br />
        <br />
        <br />
      </div>
      <div className="py-12 bg-black  overflow-y-hidden">
        {/* Code block starts */}
        <dh-component>
          {/*Hero Content Start */}
          <section ref={home}>
            <div className="bg-black">
              <br />
            </div>
            <SectionHome />
          </section>
          {/*Hero Content End */}
          <div className="bg-black">
            <br />
          </div>
          {/*first Redirection */}
          <section className="" ref={projets}>
            <HomeHero />
          </section>
          <div className="bg-black">
            <br />
            <br />
          </div>
          <section ref={about} className="bg-black">
            <Cv />
          </section>
          <section ref={contact} className="bg-black">
            <Contact />
          </section>
        </dh-component>
        {/* Code block ends */}
      </div>
    </div>
  );
}

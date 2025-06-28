import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-black tracking-wide italic text-xl font-semibold">
          <span className="text-orange-400">B</span>
          <span className="mt-1">ook</span>
          <span className="text-orange-400 ml-1">AT</span>
          <span className="mt-1">able</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-800 hover:text-orange-600 transition cursor-pointer font-medium"
            >
              {element.title}
            </ScrollLink>
          ))}

          {/* OUR MENU Scroll Button */}
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="ml-6 px-4 py-2 bg-black text-white rounded hover:bg-orange-600 transition duration-200 cursor-pointer"
          >
            OUR MENU
          </ScrollLink>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-gray-800 cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
          aria-label="Toggle Navigation"
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pt-2 pb-6 shadow-md transition-all duration-300 ease-in-out ${show ? "block" : "hidden"
          }`}
        role="navigation"
      >
        <div className="flex flex-col gap-4">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setShow(false)}
              className="text-gray-800 hover:text-orange-600 transition font-medium cursor-pointer"
            >
              {element.title}
            </ScrollLink>
          ))}

          {/* OUR MENU Scroll Button (Mobile) */}
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setShow(false)}
            className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-orange-600 transition duration-200 cursor-pointer text-center"
          >
            OUR MENU
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

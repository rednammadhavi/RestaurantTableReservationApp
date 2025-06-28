import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-black tracking-wide italic">
          <span className="text-xl text-orange-400">B</span>
          <span className="mt-1">ook</span>
          <span className="text-xl text-orange-400">AT</span>
          <span className="mt-1">able</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {data[0].navbarLinks.map((element) => (
              <Link
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-orange-600 transition cursor-pointer font-medium"
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="ml-6 px-4 py-2 bg-black text-white rounded hover:bg-orange-600 hover:text-back transition">
            OUR MENU
          </button>
        </div>

        {/* Hamburger */}
        <div
          className="text-2xl md:hidden text-gray-800 cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-4">
          {data[0].navbarLinks.map((element) => (
            <Link
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setShow(false)}
              className="block text-gray-800 hover:text-orange-600 font-medium cursor-pointer"
            >
              {element.title}
            </Link>
          ))}
          <button className="ml-6 px-4 py-2 bg-black text-white rounded hover:bg-orange-600 hover:text-back transition">
            OUR MENU
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-white text-xl sm:text-2xl italic tracking-wide flex items-center">
            <span className="text-orange-400 font-semibold">B</span>
            <span className="mt-[2px]">ook</span>
            <span className="text-orange-400 font-semibold">AT</span>
            <span className="mt-[2px]">able</span>
          </div>

          {/* Address & Timing */}
          <div className="text-center md:text-right space-y-1 text-sm sm:text-base leading-relaxed">
            <p>Shop 21, Lokhandwala Market, Andheri West, Mumbai</p>
            <p>
              Open:{" "}
              <span className="text-green-400 font-medium">
                05:00 PM - 12:00 AM
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-3">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/Rednam-madhavi/Restaurant-Table-Booking-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold hover:underline"
            >
              BookATable
            </a>. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Crafted by{" "}
            <a
              href="https://www.linkedin.com/in/rednam-naga-madhavi-242825318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              RednamMadhavi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

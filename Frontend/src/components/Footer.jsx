import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center text-white tracking-wide italic">
            <span className="text-2xl text-orange-400 font-semibold">B</span>
            <span className="mt-1">ook</span>
            <span className="text-2xl text-orange-400 font-semibold">AT</span>
            <span className="mt-1">able</span>
          </div>

          {/* Address & Timing */}
          <div className="text-center md:text-right space-y-1 text-sm sm:text-base">
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
            <a className="text-indigo-400 font-semibold" href="https://github.com/Rednam-madhavi/Restaurant-Table-Booking-App" target="_blank">BookATable</a>. All rights reserved.
          </p>
          <a className="text-center md:text-right" href="https://www.linkedin.com/in/rednam-naga-madhavi-242825318/" target="_blank">
            Crafted by <span className="text-indigo-500 hover:underline cursor-pointer">RednamMadhavi</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

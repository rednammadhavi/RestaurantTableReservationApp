import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section id="heroSection" className="bg-white relative overflow-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Banner */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-900">Delicious</h1>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Left Image */}
            <div className="w-full sm:w-1/2">
              <img
                src="/hero1.png"
                alt="Hero Dish 1"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right Text + Logo */}
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h1 className="text-5xl font-bold text-gray-800">Food</h1>
                <h1 className="text-5xl font-bold text-orange-500">Dishes</h1>
                <img src="/threelines.svg" alt="Decoration" className="w-10 mt-2" />
              </div>
              <img src="/logo.svg" alt="Brand Logo" className="w-16" />
            </div>
          </div>
        </div>

        {/* Right Banner */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/hero2.png"
            alt="Hero Dish 2"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
          <h1 className="text-5xl font-bold text-orange-500">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

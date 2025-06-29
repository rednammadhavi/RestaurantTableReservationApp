import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex flex-col bg-white"
      style={{
        backgroundImage: "url('/background.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="relative flex flex-col lg:flex-row w-full flex-grow bg-white/80 backdrop-blur-sm p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-10 md:py-20 space-y-8 sm:space-y-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
            Delicious
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {/* Left Image */}
            <img
              src="/hero1.png"
              alt="Pancake Dish"
              className="w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto rounded-lg shadow-xl object-cover"
            />


          </div>
        </div>

        {/* Food + Dishes + Logo */}
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <img
            src="/threelines.svg"
            alt="Decorative Lines"
            className="w-5 h-5 sm:w-6 sm:h-6 mt-1 ml-36"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Food
          </h2>
          <img
            src="/logo.svg"
            alt="Circular Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-36"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-10 md:py-20 space-y-6 sm:space-y-8">
          <img
            src="/hero2.png"
            alt="Burger Dish"
            className="w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto rounded-lg shadow-xl object-cover"
          />
          <div className="text-black text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-orange-500">
              Dishes
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

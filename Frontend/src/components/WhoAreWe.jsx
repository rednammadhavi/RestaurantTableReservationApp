import React from "react";
import { data } from "../restApi.json";

const WhoAreWe = () => {
  const topCards = data[0].who_we_are.slice(0, 2);
  const bottomCards = data[0].who_we_are.slice(2);

  return (
    <section id="who_are_we" className="py-4 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A snapshot of our strengths and what defines us.
          </p>
        </div>

        {/* Content Block */}
        <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 z-10">
            {topCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-6 text-center"
              >
                <h1 className="text-5xl font-bold text-orange-600">{item.number}</h1>
                <p className="mt-2 text-gray-700 text-lg">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Center Image with Background Pulse */}
          <div className="relative flex justify-center items-center">
            <img
              src="center.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-64 h-64 sm:w-96 sm:h-96 opacity-20 animate-pulse"
            />
            <img
              src="whoweare.png"
              alt="Team collaboration illustration"
              className="relative z-10 w-64 sm:w-80 md:w-96"
            />
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 z-10">
            {bottomCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-6 text-center"
              >
                <h1 className="text-5xl font-bold text-orange-600">{item.number}</h1>
                <p className="mt-2 text-gray-700 text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;

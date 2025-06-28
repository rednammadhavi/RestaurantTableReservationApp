import React from "react";
import { data } from "../restApi.json";

const WhoAreWe = () => {
  const topCards = data[0].who_we_are.slice(0, 2);
  const bottomCards = data[0].who_we_are.slice(2);

  return (
    <section id="who_are_we" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A snapshot of our strengths and what defines us.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-12 sm:flex-row sm:justify-around">
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10">
            {topCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
              >
                <h1 className="text-5xl font-semibold text-indigo-600">{item.number}</h1>
                <p className="mt-2 text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative">
            <img
              src="center.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-64 h-64 sm:w-96 sm:h-96 opacity-20 animate-pulse"
            />
            <img
              src="whoweare.png"
              alt="Team collaboration illustration"
              className="relative z-10 w-64 sm:w-80 rounded-xl shadow-xl"
            />
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10">
            {bottomCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
              >
                <h1 className="text-5xl font-semibold text-indigo-600">{item.number}</h1>
                <p className="mt-2 text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;

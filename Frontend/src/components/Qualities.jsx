import React from 'react';
import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <section id="qualities" className="p-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Qualities
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
            Why customers love us – uncompromised quality, unmatched experience.
          </p>
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
          {data[0].ourQualities.map((element) => (
            <div
              key={element.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={element.image}
                  alt={`${element.title} icon`}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {element.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;

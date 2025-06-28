import React from 'react';
import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <section id="qualities" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Our Qualities</h2>
          <p className="text-gray-600 mt-2">
            Why customers love us – uncompromised quality, unmatched experience.
          </p>
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data[0].ourQualities.map((element) => (
            <div
              key={element.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center"
            >
              <img
                src={element.image}
                alt={element.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {element.title}
              </p>
              <p className="text-gray-600 text-sm">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;

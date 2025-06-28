import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section id="menu" className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Popular Dishes</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our crowd favorites – expertly crafted dishes loved by all. Whether you're craving something spicy, sweet, or savory, we've got you covered.
          </p>
        </div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data[0].dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{dish.title}</h3>
                <button className="inline-block px-4 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition">
                  {dish.category}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;

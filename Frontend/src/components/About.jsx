import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            <em>The only thing we're serious about is food.</em>
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Book-a-Bite:</strong> Smart & Seamless Restaurant Reservations
          </p>
          <p className="text-gray-600 mb-4">
            Book-a-Bite is a modern restaurant reservation platform designed to make dining out hassle-free.
            Whether you're planning a romantic dinner, a family gathering, or a casual outing with friends,
            Book-a-Bite helps you find the perfect table at your favorite restaurants with just a few clicks.
          </p>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>✨ Instant Reservations – Book a table in real-time without waiting.</li>
            <li>📍 Personalized Recommendations – Based on cuisine, location, and preferences.</li>
            <li>📊 Live Availability – Check real-time table availability and avoid wait times.</li>
            <li>⚡ Seamless Experience – User-friendly interface for quick and easy bookings.</li>
            <li>🎁 Exclusive Deals – Unlock discounts and special offers at partner restaurants.</li>
          </ul>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg transition duration-200"
          >
            Explore Menu <HiOutlineArrowRight size={20} />
          </Link>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <img
            src="about.png"
            alt="About Book-a-Bite"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

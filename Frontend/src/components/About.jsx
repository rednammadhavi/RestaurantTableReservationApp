import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="bg-white p-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Us
          </h1>

          <p className="text-xl italic text-gray-600 mb-4">
            “The only thing we're serious about is food.”
          </p>

          <p className="text-gray-700 mb-4 text-lg">
            <strong className="text-orange-600">Book-a-Table:</strong> Smart & Seamless Restaurant Reservations
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Book-a-Table is a modern restaurant reservation platform designed to make dining out hassle-free.
            Whether you're planning a romantic dinner, a family gathering, or a casual outing with friends,
            Book-a-Table helps you find the perfect table at your favorite restaurants with just a few clicks.
          </p>

          <h4 className="text-2xl font-semibold text-gray-800 mb-3">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>Instant Reservations – Book a table in real-time without waiting.</li>
            <li>Personalized Recommendations – Based on cuisine, location, and preferences.</li>
            <li>Live Availability – Check real-time table availability and avoid wait times.</li>
            <li>Seamless Experience – User-friendly interface for quick and easy bookings.</li>
            <li>Exclusive Deals – Unlock discounts and special offers at partner restaurants.</li>
          </ul>

          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="mt-8 inline-flex items-center gap-2 text-white bg-gray-800 hover:bg-orange-600 px-6 py-3 rounded-lg transition duration-300 group"
          >
            Explore Menu
            <HiOutlineArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </ScrollLink>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <img
            src="about.png"
            alt="About Book-a-Table"
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

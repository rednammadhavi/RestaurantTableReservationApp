import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-xl text-center space-y-6">
        <img
          src="/notFound.svg"
          alt="Page Not Found Illustration"
          className="mx-auto w-60 h-60 object-contain"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600">
          404 - Page Not Found
        </h1>
        <p className="text-gray-700 text-lg">
          Looks like you're lost. We can't find the page you’re looking for.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
        >
          Back to Home <HiOutlineArrowNarrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

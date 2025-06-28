import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <img
          src="/sandwich.png"
          alt="Order Success"
          className="mx-auto w-40 h-40 object-contain animate-bounce"
        />
        <h1 className="text-2xl sm:text-3xl font-semibold text-green-700">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-700 text-lg">
          Redirecting to home in <span className="font-bold">{countdown}</span> second{countdown !== 1 ? "s" : ""}...
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md transition duration-200"
        >
          Back to Home <HiOutlineArrowNarrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default Success;

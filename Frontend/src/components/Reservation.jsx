import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/reservation/send",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message || "Reservation Successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        time: "",
        phone: "",
      });
      navigate("/success");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Reservation failed.");
    }
  };

  return (
    <section id="reservation" className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/reservation.png"
            alt="Reservation Illustration"
            className="w-full max-w-lg md:max-w-xl"
          />
        </div>

        {/* Form Section */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Make a Reservation
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            For further questions, please call.
          </p>

          <form onSubmit={handleReservation} className="space-y-5">
            {/* Name Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Date & Time Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email & Phone Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-md hover:bg-orange-600 transition duration-300 group"
            >
              Reserve Now
              <HiOutlineArrowNarrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

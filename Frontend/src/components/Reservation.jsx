import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Reservation failed.");
    }
  };

  return (
    <section id="reservation" className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/reservation.png"
            alt="Reservation"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Make a Reservation
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            For further questions, please call.
          </p>

          <form onSubmit={handleReservation} className="space-y-4">
            {/* Name Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Date & Time Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email & Phone Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              // className="ml-6 px-4 py-2 bg-black text-white rounded  transition"
              className="w-full bg-black text-white py-2 rounded hover:bg-orange-600 hover:text-back transition flex justify-center align-center"
            >
              Reserve Now <HiOutlineArrowNarrowRight size={20} className="ml-1 mt-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

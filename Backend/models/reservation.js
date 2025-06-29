import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must be at least 3 characters."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must be at least 3 characters."],
    maxLength: [30, "Last name cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Provide a valid email"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: value => /^\d{11}$/.test(value),
      message: "Phone number must be exactly 11 digits.",
    },
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "../middlewares/error.js";
import reservationRouter from "../routes/reservationRoute.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(
  cors({
    origin: process.env.CROSS_ORGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to BookATable API" });
});

app.use(errorMiddleware);

export default app;

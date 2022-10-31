import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";

// Config
import { connectDB } from "./config/db.js";
// Config

// Middleware
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// Middleware

// Routes
import userRoutes from "./routes/userRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js"
import workoutRoutes from './routes/workoutRoutes.js'
// Routes

dotenv.config();

connectDB(); //Подключаем базу данных

const app = express(); //Запускаем приложение

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/workouts", workoutRoutes)

app.use(errorHandler); // Подключаем Middleware
app.use(notFound); // Подключаем Middleware

const PORT = process.env.PORT || 5000; //Указываем порт на котором будет работать сервер

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

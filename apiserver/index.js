import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
dotenv.config();

import { homeRoute, userRoute, authRoute } from "./routes/index.js";

// Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected...!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cookieParser());
app.use(express.json());

// Routes =====
app.use("/", homeRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();
const port = 8000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);//don't forget the .env file
    console.log("MongoDB Connected...");
  } catch (e) {
    throw e;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB has connected...");
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB has disconnected...");
});

//middleware
app.use(express.json());
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/auth", authRoute);

//error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong...";
  return res
    .status(errorStatus)
    .json({ success: false, status: errorStatus, message: errorMessage, stack:err.stack });
});

app.listen(port, () => {
  connect();
  console.log(`Listening to port ${port}...`);
});

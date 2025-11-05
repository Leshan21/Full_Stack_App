const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./route/workouts");

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// route
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT} `);
    });
  })
  .catch((error) => {
    console.log({ message: error.message });
  });

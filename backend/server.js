const express = require('express');
const dotenv = require('dotenv');

const workoutRoutes = require('./route/workouts');

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// route
app.use('/api/workouts', workoutRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
})
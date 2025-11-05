const Workout = require('../models/workoutModel');


// Get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    }
  
    catch(err){
        res.status(400).json({error: err.message});
    }
}

// get single workout


// create new workout
const createWorkout = async (req, res) => {
  try {
    const { title, reps, load }  = req.body;
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// delete a workout


// update a workout


module.exports = {
    createWorkout,
    getAllWorkouts
}
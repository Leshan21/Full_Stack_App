const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');


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
const getWorkout = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) { // check id is valid before execute the funtion
    return res.status(404).json({error: 'No such workout'});  
  }

  const workout = await Workout.findById(id);
  res.status(200).json(workout);

  if(!workout){
    return res.status(404).json({error: 'No such workout'});
  }

}

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
    getAllWorkouts,
    getWorkout
}
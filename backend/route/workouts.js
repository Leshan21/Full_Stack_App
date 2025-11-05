const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel')


// Get all workouts
router.get('/', (req, res) => {
  res.send('Get all workouts');
})

// Get single workout
router.get('/:id', (req, res) => {
  
})

// Post a workout
router.post('/', async (req, res) => {
  const {title, reps, load} = req.body;
  try {
    const workout = await Workout.create({title, reps, load});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
})

// Delete a workout
router.delete('/:id', (req, res) => {
  
})

// Update a workout
router.patch('/:id', (req, res) => {
  
})

module.exports = router;
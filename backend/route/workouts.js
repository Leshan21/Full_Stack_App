const express = require('express');
const router = express.Router();
const { createWorkout, getAllWorkouts } = require('../controllers/workoutController');


// Get all workouts
router.get('/', getAllWorkouts)

// Get single workout
router.get('/:id', (req, res) => {
  
})

// Post a workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', (req, res) => {
  
})

// Update a workout
router.patch('/:id', (req, res) => {
  
})

module.exports = router;
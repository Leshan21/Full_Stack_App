const express = require('express');
const router = express.Router();
const { createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');


// Get all workouts
router.get('/', getAllWorkouts)

// Get single workout
router.get('/:id', getWorkout)

// Post a workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.put('/:id', updateWorkout)

module.exports = router;
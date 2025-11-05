const express = require('express');
const router = express.Router();


// Get all workouts
router.get('/', (req, res) => {
  res.send('Get all workouts');
})

// Get single workout
router.get('/:id', (req, res) => {
  
})

// Post a workout
router.post('/', (req, res) => {
  
})

// Delete a workout
router.delete('/:id', (req, res) => {
  
})

// Update a workout
router.patch('/:id', (req, res) => {
  
})

module.exports = router;
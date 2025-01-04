const express = require('express');
const router = express.Router();
const {
  updateLocation,
  getGroupLocations
} = require('../controllers/locationController');

// Update location for a user
router.post('/', updateLocation);

// Get all group members' locations
router.get('/', getGroupLocations);

module.exports = router;

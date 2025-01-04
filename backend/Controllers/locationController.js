const Location = require('../models/Location');

// Update or insert user location
const updateLocation = async (req, res) => {
  const { userId, latitude, longitude } = req.body;

  if (!userId || !latitude || !longitude) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const updatedLocation = await Location.findOneAndUpdate(
      { userId },
      { latitude, longitude, timestamp: new Date() },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Location updated", location: updatedLocation });
  } catch (error) {
    res.status(500).json({ error: "Error updating location", details: error.message });
  }
};

// Get all group members' locations
const getGroupLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching locations", details: error.message });
  }
};

module.exports = { updateLocation, getGroupLocations };

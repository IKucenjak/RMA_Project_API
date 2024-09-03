const express = require('express');
const router = express.Router();
const { artists } = require('../data/db');

// Get all artists
router.get('/', (req, res) => {
  res.json(artists);
});

// Get artist by ID
router.get('/:id', (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.id));
  if (!artist) return res.status(404).send('Artist not found');
  
  res.json(artist);
});

module.exports = router;

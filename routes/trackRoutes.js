// routes/trackRoutes.js

const express = require('express');
const router = express.Router();
const { tracks } = require('../data/db');
const Track = require('../models/trackModel');

// Get all tracks
router.get('/', (req, res) => {
  res.json(tracks);
});

// Get track by ID
router.get('/:id', (req, res) => {
  const track = tracks.find(t => t.id === parseInt(req.params.id));
  if (!track) return res.status(404).send('Track not found');
  res.json(track);
});

// Get tracks for an album
router.get('/album/:albumId', (req, res) => {
  // Find the artist first
  const artist = artists.find(a => a.albums.some(album => album.id === parseInt(req.params.albumId)));
  if (!artist) return res.status(404).send('Album not found');
    
  const album = artist.albums.find(a => a.id === parseInt(req.params.albumId));
  if (!album) return res.status(404).send('Album not found');
  
  res.json(album.tracks);
});
  

module.exports = router;

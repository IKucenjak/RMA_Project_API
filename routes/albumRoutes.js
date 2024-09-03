// routes/albumRoutes.js

const express = require('express');
const router = express.Router();
const { albums } = require('../data/db');
const Album = require('../models/albumModel');

// Get all albums
router.get('/', (req, res) => {
  res.json(albums);
});

// Get album by ID
router.get('/:id', (req, res) => {
  const album = albums.find(a => a.id === parseInt(req.params.id));
  if (!album) return res.status(404).send('Album not found');
  res.json(album);
});

// Get albums for an artist
router.get('/artist/:artistId', (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.artistId));
  if (!artist) return res.status(404).send('Artist not found');
  
  res.json(artist.albums);
});
  

module.exports = router;

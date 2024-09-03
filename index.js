const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const trackRoutes = require('./routes/trackRoutes');

// Middleware
app.use(express.json()); // For parsing application/json

// Use routes
app.use('/api/v1/artists', artistRoutes);
app.use('/api/v1/albums', albumRoutes);
app.use('/api/v1/tracks', trackRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Artist API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

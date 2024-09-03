const express = require('express');
const app = express();
const artistRoutes = require('./routes/artistRoutes');

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/artists', artistRoutes); // Make sure this is correct

// Fallback route
app.get('/', (req, res) => {
  res.send('Welcome to the Artist API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require('path');
const fs = require('fs');

// Resolve the path to the initial data file
const filePath = path.join(__dirname, '../data/initialData.json');

// Read and parse the JSON data
const rawData = fs.readFileSync(filePath);
const data = JSON.parse(rawData);

// Export the data
const artists = data.artists;

module.exports = { artists };

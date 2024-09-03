const fs = require('fs');
const path = require('path');
const { artists } = require('../data/db.js');

// Path to the initial data JSON file
const filePath = path.join(__dirname, '../data/initialData.json');

// Function to load initial data from the JSON file
function loadInitialData() {
    // Read the JSON file
    const data = fs.readFileSync(filePath, 'utf-8');
    const initialData = JSON.parse(data);

    // Populate the artists array
    initialData.artists.forEach(artistData => {
        artists.push(artistData);
    });

    console.log('Initial data loaded successfully');
}

// Call the function to load the data
loadInitialData();

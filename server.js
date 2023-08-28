const express = require('express');
const path = require('path'); // Import the path module
const apiRoutes = require('./routes/apiroutes'); // Import your API routes module
const clog = require('./middleware/clog'); // Import your clog middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static('public')); // Serve static files from the "public" directory
app.use(clog); // Use the custom clog middleware for logging requests

// HTML Routes
app.get('/', (req, res) => {
    // Send the index.html file when the root URL is accessed
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.get('/notes', (req, res) => {
    // Send the notes.html file when the "/notes" URL is accessed
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Use the API routes
app.use('/api', apiRoutes); // Mount the apiRoutes module under the "/api" route

// Start the server
app.listen(PORT, () => {
    console.log(`🚀Server is running on http://localhost:${PORT}`);
});

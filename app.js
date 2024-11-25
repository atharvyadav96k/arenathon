const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config(); // Load environment variables

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define the root route
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home Page', 
        message: 'Welcome to Express with EJS!' 
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Global error handler for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

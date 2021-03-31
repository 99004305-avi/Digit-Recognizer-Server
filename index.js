const express = require('express');
const cors = require('cors');
const app = express();
// Variables
const protocol = process.env.PROTOCOL || 'http';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// Logger
app.use((req, res, next) => {
	console.log(`${new Date()} - ${req.method} request for ${req.url}`);
	next();
});
//Cors Enable
app.use(cors());
// Body Parser
app.use(express.json());
// Static File serve
app.use(express.static('public'));
// Routes
app.post('/predict', require('./predict'));

// Listening
app.listen(port, (e) => {
	console.log(`\nApp is running at ${protocol}://${host}:${port}`);
});

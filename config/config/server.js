const express = require('express');
const connectDB = require('./app'); // or './db' if you renamed it
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// A simple route to test server
app.get('/', (_, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
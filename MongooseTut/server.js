// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/linkedin-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

// Use routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
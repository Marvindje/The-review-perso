// app.js

// Configuration and utility imports
require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Route imports
const articlesRoutes = require('./routes/articles');
const categoriesRouter = require('./routes/categories');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

require('../models/relations');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
  optionsSuccessStatus: 200,
}));

// Serve static resources
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/categories', categoriesRouter);
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/articles', articlesRoutes);

// Serve React application if it exists
const reactIndexFile = path.join(__dirname, '../../frontend/dist/index.html');
if (fs.existsSync(reactIndexFile)) {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// Error handling middlewares

// Handle 404 errors
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Handle all other errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

const port = process.env.APP_PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

// Configuration and utility imports
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import path from "path";

dotenv.config();

// Route imports
import { router } from "./src/routes"

require('./src/models/relations');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
  optionsSuccessStatus: 200,
}));

// Serve static resources
app.use(express.static(path.join(__dirname, './public')));

// Routes
router(app)

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

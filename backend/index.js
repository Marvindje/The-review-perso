const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");  // Ajout du package CORS
const router = require("./src/routes");

require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());  // Activation de CORS pour toutes les routes
router(app);

const PORT = process.env.DB_PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
});

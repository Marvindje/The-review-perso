const express = require("express");
const dotenv = require("dotenv");

require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.DB_PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})
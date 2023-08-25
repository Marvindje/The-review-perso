const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/routes")

require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

router(app);

const PORT = process.env.DB_PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})
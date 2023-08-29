const express = require("express")
const authControllers =  require('../controllers/auth.controller')

const authRoutes = express.Router();

authRoutes
.post('/register', authControllers.register)
.post('/login', authControllers.login);

module.exports = {
    authRoutes
}
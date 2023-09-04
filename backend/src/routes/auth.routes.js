const express = require("express")
const AuthController =  require('../controllers/auth.controller')

const authRoutes = express.Router();

authRoutes
.post('/register', AuthController.register)
.post('/login', AuthController.login);

module.exports = {
    authRoutes
}
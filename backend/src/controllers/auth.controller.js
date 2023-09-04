const { User } =  require('../models/user.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthController {
    static async login(req, res){
        try {
            const { email, password } = req.body;
    
            if(!email || !password) {
                return res.status(500).send({ error: "username or email is not defined !" })
            }
    
            const user = await User.findOne({
                where: {
                    email
                }
            })
    
            if(!user) {
                return res.status(404).send({ error: "username or email are incorrect !" })
            }
    
            const isCorrectPassword = bcrypt.compareSync(password, user.password);
    
            if(!isCorrectPassword){
                return res.status(404).send({ error: "username or email are incorrect !" })
            }
    
            const jwtSecret = process.env.JWT_SECRET;
    
            if(!jwtSecret){
                return res.status(500).send("Failed login !")
            }
    
            const token = jwt.sign({
                userId: user.id,
                email: user.email
            }, jwtSecret, {
                expiresIn: "1d"
            });
    
            res.cookie("token", token, {
                maxAge: 1000 * 60 * 60 * 24,
                httpOnly: true
            })
    
            res.status(200).send({
                userId: user.id,
                email: user.email,
                username: user.username,
                profile_image: user.profile_image,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        } catch(err) {
            console.error(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async register(req, res){
        try {
            const { username, email, password, profile_image } = req.body;
    
            if(!username || !email || !password) {
                return res.status(500).send({ error: "username, email or password is not defined !" })
            }
    
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt)
    
            const user = await User.create({
                username, 
                email, 
                password: hashPassword,
                profile_image: profile_image || null
            })
    
            await AuthController.login(req, res)
    
            res.status(200).send(user);
        } catch (err) {
            console.error(err);
            res.status(500).send({ error: err.message })
        }
    }
}

module.exports = AuthController;
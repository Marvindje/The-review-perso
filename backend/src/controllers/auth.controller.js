const User =  require('../models/user.model');
const bcrypt = require("bcryptjs");
//TODO: creer le unique dans users
const register = async (req, res) => {
    try {
        const { username, email, password, profile_image } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)

        console.log({ password, hashPassword, salt });

        res.send(200)
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message })
    }
}

module.exports = {
    register
}
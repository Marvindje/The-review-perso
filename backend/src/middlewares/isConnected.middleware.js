const jwt = require('jsonwebtoken');

const isConnectedMiddleware = (req, res, next) => {
    const { token } = req.cookies;

    if(!token){
        return res.status(401).send({
            message: "Unauthorized"
        })
    }

    const jwtSecret = process.env.JWT_SECRET;

    if(!jwtSecret){
        return res.status(401).send({
            message: "Unauthorized"
        })
    }

    req.user = jwt.verify(token, jwtSecret)

    next()
}

module.exports = { isConnectedMiddleware }
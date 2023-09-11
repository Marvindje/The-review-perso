const jwt = require('jsonwebtoken');

class IsConnectedMiddleware {
    static execute(req, res, next){
        try{
            const { token } = req.cookies;

            if(!token){
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }

            const jwtSecret = process.env.JWT_SECRET;

            if(!jwtSecret){
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }

            req.user = jwt.verify(token, jwtSecret);

            next();
        } catch(err){  // a noter que c'est "err" ici
            console.error(err);  // Et aussi ici
            res.status(401).send({ error: err.message });
        }
    }
    
}

module.exports = IsConnectedMiddleware;

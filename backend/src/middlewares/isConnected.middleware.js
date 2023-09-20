const jwt = require("jsonwebtoken");

class IsConnectedMiddleware {
  static execute(req, res, next) {
    try {
      const { token } = req.cookies;

      if (!token) {
        return res.status(401).send({
          message: "Unauthorized",
        });
      }

      const jwtSecret = process.env.JWT_SECRET;

      if (!jwtSecret) {
        return res.status(401).send({
          message: "Unauthorized",
        });
      }

      req.user = jwt.verify(token, jwtSecret);

      return next(); // Ajout d'un 'return' ici
    } catch (err) {
      console.error(err);
      return res.status(401).send({ error: err.message }); // Ajout d'un 'return' ici aussi pour la cohérence
    }
  }
}

module.exports = IsConnectedMiddleware;

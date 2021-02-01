const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        req.status(401).json("You need a VALID token!");
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    res.status(401).json("You need a token to proceed!");
  }
};

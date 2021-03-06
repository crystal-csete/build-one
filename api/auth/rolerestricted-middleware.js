module.exports = (role) => (req, res, next) => {
  if (req.decodedJwt && req.decodedJwt.role === role) {
    next();
  } else {
    res.status(403).json("You cannot change anything or proceed!");
  }
};

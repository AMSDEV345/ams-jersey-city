const authMiddleware = (req, res, next) => {

  console.log("Auth middleware running");

  next();

};

module.exports = authMiddleware;
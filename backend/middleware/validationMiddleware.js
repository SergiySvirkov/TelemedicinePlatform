const { validationResult } = require('express-validator');

// Middleware for request validation
const validationMiddleware = (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

module.exports = validationMiddleware;


// Error middleware for handling errors
const errorMiddleware = (err, req, res, next) => {
  console.error('Error:', err);

  // Check if error is a Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ error: errors.join(', ') });
  }

  // Check if error is a JWT verification error
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  // Default error response
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorMiddleware;

